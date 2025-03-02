def generate_schedule(employees, shifts):
    # Placeholder logic for generating schedule
    # Replace with actual AI scheduling logic
    schedule = []

    for shift in shifts:
        for employee in employees:
            if employee['availability']:
                schedule.append({
                    'shift': shift,
                    'employee': employee
                })
                break

    return schedule