import json
import sys
import urllib.parse
from typing import List

import questplus as qp


def lambda_handler(event, context):
    try:
        qp_params = json.loads(urllib.parse.unquote(event["body"]))["qp_params"]
        results = json.loads(urllib.parse.unquote(event["body"]))["results"]
    except Exception as e:
        print(e, file=sys.stderr)
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "request body is empty or invalid"})
        }

    return run(qp_params, sorted(results, key=lambda x: x["num_trial"]))


def run(qp_params: dict, results: List[dict]) -> dict:
    intensity: List[float] = qp_params["stim_domain"]["intensity"]
    if len(intensity) < 2:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "too few intensities"}),
        }

    q = qp.QuestPlus(**qp_params)
    for res in results:
        q.update(
            stim=dict(intensity=int(res["move_width"]) / 10),
            outcome=dict(response=res["response"])
        )

    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "next_stim": q.next_stim["intensity"],
            }
        ),
    }
