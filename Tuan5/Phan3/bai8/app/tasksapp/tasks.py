import time

from celery import shared_task


@shared_task
def add_numbers(x, y):
    time.sleep(5)
    return {
        "message": "Task completed successfully",
        "x": x,
        "y": y,
        "sum": x + y,
    }
