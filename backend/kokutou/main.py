import connexion
from flask import Flask

from kokutou.models.model import database
from kokutou.routing import connexion_init

connexion_app = connexion.FlaskApp(__name__, specification_dir="./")
app = connexion_app.app


def init_app() -> Flask:
    database.init_app(app=app, database_echo=app.config.get("DATABASE_ECHO_SCRAPE"))
    # FIXME routingはflaskとopenapiで分かれている(将来的にopenapiに寄せていく方針)
    # json_api_routing(app)
    connexion_init(connexion_app)
    app.app_context().push()
    return app


@app.route("/ping")
def ping():
    return "pong"
