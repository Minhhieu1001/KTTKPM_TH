from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify({"service": "app2", "message": "Service 2 running"})

@app.route('/api/call-app1')
def call_app1():
    try:
        # Gọi app1 thông qua hostname (private network)
        response = requests.get('http://app1:5001/api/data')
        data = response.json()
        return jsonify({
            "service": "app2",
            "called_app1": True,
            "app1_data": data
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/status')
def status():
    return jsonify({"service": "app2", "status": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
