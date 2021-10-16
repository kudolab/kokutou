from flask import current_app, jsonify

class UnexpectedFileFoundException(Exception):
    pass


class UnexpectedResourceFoundException(Exception):
    pass


class ResourceNotFoundException(Exception):
    pass


class UnexpectedResponseStatusException(Exception):
    pass


class UnexpectedRowCountException(Exception):
    pass


class JsonHttpException(Exception):
    def __init__(self, errors: list, status_code: int):
        self.messages = jsonify({"errors": errors})
        self.status_code = status_code


class MaintenanceException(Exception):
    def __init__(self):
        self.messages = jsonify({"is_maintenance": True})
        self.status_code = 503


class MarshmallowExtException(JsonHttpException):
    def __init__(self, marshmallow_error: dict, status_code=400):
        """
        :param marshmallow_error: {field_name: [{k: v}]}  marshmallow lib validate spec
        :param status_code: http status code
        """
        errors = []
        for _, v in marshmallow_error.items():
            errors.extend(v)
        super().__init__(errors, status_code)


class SQLAlchemyErrorExtException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)


class BadRequestException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=400):
        super().__init__([{"message": message, "code": code}], status_code)


class AuthException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=401):
        super().__init__([{"message": message, "code": code}], status_code)


class NotAuthorizedException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=403):
        current_app.logger.info(message, extra={"ignorable_exc": "not_authorized"})
        super().__init__([{"message": message, "code": code}], status_code)


class NotFoundException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=404):
        current_app.logger.info(message, extra={"ignorable_exc": "not_found"})
        super().__init__([{"message": message, "code": code}], status_code)


class ConflictException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=409):
        super().__init__([{"message": message, "code": code}], status_code)


class AlreadyExistException(ConflictException):
    pass


class Auth0ManagementAPIException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)


class WebRequestException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)


class CsvGenerateException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)


class LogicException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)


class AwsSesException(JsonHttpException):
    def __init__(self, message: str, code=0, status_code=500):
        current_app.logger.exception(message)
        super().__init__([{"message": message, "code": code}], status_code)
