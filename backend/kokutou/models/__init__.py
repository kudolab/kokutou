from sqlalchemy.dialects.mysql import INTEGER as Integer
from sqlalchemy.schema import Column
from sqlalchemy.types import DATETIME, VARCHAR

from kokutou.models.model import BaseLogModel, BaseModel
from kokutou.models.model import database as db


class User(BaseModel):
    __tablename__ = "user"

    id = Column(Integer(unsigned=True), primary_key=True, autoincrement=True)
    firebase_uid = Column(VARCHAR(length=255), nullable=False, comment="firebaseのuid")
    display_name = Column(VARCHAR(length=255), nullable=False, comment="firebase userの表示名")
    deleted_at = Column(DATETIME)
