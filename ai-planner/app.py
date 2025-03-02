from flask import Flask, request, jsonify
from flask_cors import CORS
from scheduler import generate_schedule

app = Flask(__name__)
CORS(app)

@app.route('/generate-schedule', methods=['POST'])
def generate_schedule_route():
    data = request.get_json()
    employees = data.get('employees')
    shifts = data.get('shifts')
    
    schedule = generate_schedule(employees, shifts)
    return jsonify(schedule)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)