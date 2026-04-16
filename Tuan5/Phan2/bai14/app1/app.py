from flask import Flask, jsonify, request
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify({"service": "app1", "message": "Service 1 running"})

@app.route('/api/message', methods=['POST'])
def receive_message():
    data = request.json
    return jsonify({"received": data.get('message', 'No message'), "from": "app1"})

@app.route('/api/data')
def get_data():
    return jsonify({
        "service": "app1",
        "data": [1, 2, 3, 4, 5],
        "timestamp": "2025-04-16"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
