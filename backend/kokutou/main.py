import os

import connexion
from flask import Flask

from kokutou.routing import connexion_init
from kokutou.models.model import database

connexion_app = connexion.FlaskApp(__name__, specification_dir="./")
app = connexion_app.app

def init_app() -> Flask:
    # env = os.environ.get("KOKUTOU_ENV")
    # app.config["ENV"] = env
    # app.config.from_object(config[env])
    # os.makedirs(app.config.get("LOG_ROOT_API"), exist_ok=True)
    database.init_app(app=app, database_echo=app.config.get("DATABASE_ECHO_SCRAPE"))
    # FIXME routingはflaskとopenapiで分かれている(将来的にopenapiに寄せていく方針)
    # json_api_routing(app)
    connexion_init(connexion_app)
    app.app_context().push()
    return app

@app.route("/ping")
def ping():
    return "pong"
