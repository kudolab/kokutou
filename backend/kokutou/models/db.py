from flask import Flask
from flask_sqlalchemy import BaseQuery
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, scoped_session, sessionmaker

from rpz.libs.exception import NotFoundException


class Query(BaseQuery):
    def get_one(self, ident: int, raise_no_result=True):
        ret = self.get(ident)

        table_name = list(self.__dict__["_mapper_adapter_map"].keys())[0].__tablename__
        message = "not exist, table_name = {table_name}, id = {ident}".format(
            table_name=table_name, ident=ident
        )
        if ret is None and raise_no_result is True:
            raise NotFoundException(message=message)
        elif (
                ret is not None and "deleted_at" in dir(ret) and ret.deleted_at is not None
        ):
            raise NotFoundException(message=message)
        return ret


class SessionManager:

    _sessions = None

    def init_app(self, app: Flask, database_echo=False) -> None:
        self._sessions = {}
        self._build(app, database_echo)

        if not app.testing:
            app.teardown_request(self.shutdown_session)

    def _build(self, app: Flask, database_echo: bool) -> None:
        for name, dsl in app.config["DATABASES"].items():
            self._create_session(app, name, dsl, database_echo)

    def _create_session(
            self, app: Flask, name: str, dsl: dict, database_echo: bool
    ) -> None:

        engine = create_engine(
            dsl["setting"],
            encoding="utf-8",
            echo=database_echo,
            pool_pre_ping=True,
            isolation_level=dsl["isolation_level"],
        )

        session = scoped_session(
            sessionmaker(
                bind=engine,
                class_=TestingSession if app.testing else Session,
                expire_on_commit=False,
                query_cls=Query,
            )
        )

        self._sessions[name] = session

    def shutdown_session(self, exception=None):
        for name, session in self._sessions.items():
            session.remove()
        return exception

    def get_master_session(self) -> scoped_session:
        return self._sessions.get("master")

    def get_slave_session(self) -> scoped_session:
        return self._sessions.get("slave")

    def execute(self, stmt, parameters=None, **kw):
        self.get_master_session().execute(stmt, parameters, **kw)

    def bulk_save_objects(self, objects):
        self.get_master_session().bulk_save_objects(objects)

    def begin_subtransactions(self):
        self.get_master_session().begin(subtransactions=True)

    def commit(self):
        self.get_master_session().commit()

    def rollback(self):
        self.get_master_session().rollback()

    def refresh(self, ins):
        self.get_master_session().refresh(ins)


class TestingSession(Session):
    def commit(self):
        self.flush()
        self.expire_all()
