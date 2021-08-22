import json
import urllib.parse


def lambda_handler(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    qp_params = urllib.parse.unquote(event['queryStringParameters']['qp_params'])
    results = urllib.parse.unquote(event['queryStringParameters']['results'])
    print(qp_params)
    print(results)

    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "message": "hello world",
                "qp_params": qp_params,
                "results": results,
            }
        ),
    }
