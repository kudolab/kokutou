import json
import os
import random
import sys
import urllib.parse
from typing import List

import questplus as qp
from flask import Flask, request

app = Flask(__name__)


@app.route("/ping")
def ping():
    """Get Cloud Run environment variables."""
    return "pong"


@app.route("/hello")
def hello_world():
    name = os.environ.get("NAME", "World")
    return "Hello {}!".format(name)


@app.route("/next_stim", methods=["POST"])
def next_stim():
    try:
        qp_params = json.loads(urllib.parse.unquote(request.get_data()))["qp_params"]
        results = json.loads(urllib.parse.unquote(request.get_data()))["results"]
        results = sorted(results, key=lambda r: r["num_trial"])
        print(qp_params)
        print(results)
    except Exception as e:
        print(e, file=sys.stderr)
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "request body is empty or invalid"})
        }

    return run(qp_params, results)


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

    intensity_int: List[int] = list(map(int, map(lambda x: x * 10, intensity)))
    stim_spacing: int = abs(intensity_int[1] - intensity_int[0])
    stim_range = int(len(intensity_int) * 0.1)
    stim_jitters = list(range(-stim_range * stim_spacing, (stim_range + 1) * stim_spacing, stim_spacing))
    stim_jitter = random.choice(stim_jitters) / 10.0
    stim = q.next_stim["intensity"]

    if (stim + stim_jitter) in intensity:
        stim += stim_jitter

    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "next_stim": stim,
            }
        ),
    }


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
