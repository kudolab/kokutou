from datetime import datetime

import sqlalchemy
from sqlalchemy import func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import DATETIME, TypeDecorator

from .db import SessionManager

database = SessionManager()
_Base = declarative_base()


class EnumAsInteger(TypeDecorator):
    """Column type for storing Python enums in a database INTEGER column.

    This will behave erratically if a database value does not correspond to
    a known enum value.
    """

    impl = sqlalchemy.types.Integer

    def __init__(self, enum_type):
        super(EnumAsInteger, self).__init__()
        self.enum_type = enum_type

    def process_bind_param(self, value, dialect):
        if isinstance(value, self.enum_type):
            return value.value
        raise ValueError(
            "expected %s value, got %s"
            % (self.enum_type.__name__, value.__class__.__name__)
        )

    def process_result_value(self, value, dialect):
        return self.enum_type(value)

    def copy(self, **kwargs):
        return EnumAsInteger(self.enum_type)


class Base(_Base):
    __abstract__ = True

    @classmethod
    def master_query(cls):
        return database.get_master_session().query(cls)

    @classmethod
    def slave_query(cls):
        return database.get_slave_session().query(cls)

    @classmethod
    def add_new(cls, **kw):
        instance = cls(**kw)
        database.get_master_session().add(instance)
        return instance


class BaseModel(Base):
    __abstract__ = True
    created_at = Column(
        DATETIME, default=datetime.now, server_default=func.now(), nullable=False
    )
    updated_at = Column(
        DATETIME, default=datetime.now, onupdate=func.now(), nullable=False
    )


class BaseLogModel(Base):
    __abstract__ = True
    created_at = Column(
        DATETIME, default=datetime.now, server_default=func.now(), nullable=False
    )
