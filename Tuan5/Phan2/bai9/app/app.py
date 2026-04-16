from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify({"message": "Hello from Flask!", "environment": os.getenv('ENV', 'development')})

@app.route('/api/status')
def status():
    return jsonify({"status": "running", "service": "flask-app"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
