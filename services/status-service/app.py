from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/status")
def status():
    return jsonify([
        {"id": 1, "status": "Active"},
        {"id": 2, "status": "Inactive"}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)
