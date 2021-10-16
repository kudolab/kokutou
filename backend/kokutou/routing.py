from connexion.exceptions import ProblemException
from flask import Blueprint, Flask
from flask import jsonify, make_response


def render_exception(e: ProblemException):
    return make_response(
        jsonify({"errors": [{"message": e.detail}]}),
        e.status,
        {"Content-Type": "application/json"},
    )


def connexion_init(con_app):
    con_app.add_api(
        "openapi.yaml",
        validate_responses=True,
    )
    con_app.add_error_handler(ProblemException, render_exception)


def json_api_routing(app: Flask):
    app.register_error_handler(404, page_not_found)
    app.register_blueprint(healthcheck)


def page_not_found(error):
    return make_response(jsonify({}), 404, {"Content-Type": "application/json"})


healthcheck = Blueprint("healthcheck", __name__)


@healthcheck.route("/healthcheck", methods=["GET"])
def health():
    # try:
    #     Maintenance.check()
    # except MaintenanceException:
    #     pass
    #
    result = {"healthcheck": "ok"}
    return make_response(jsonify(result), 200, {"Content-Type": "application/json"})
