from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/status")
def get_status():
    return jsonify({"status": "running", "uptime": "100%"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)
