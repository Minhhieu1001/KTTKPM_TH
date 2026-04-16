import json

from celery.result import AsyncResult
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .tasks import add_numbers


def home(request):
    return JsonResponse(
        {
            "message": "Django + Celery + Redis stack is running",
            "usage": {
                "trigger_task": "/trigger-task/?x=5&y=7",
                "task_status": "/task-status/<task_id>/",
            },
        }
    )


@require_http_methods(["GET", "POST"])
def trigger_task(request):
    if request.method == "POST":
        try:
            payload = json.loads(request.body or "{}")
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON body"}, status=400)

        x = int(payload.get("x", 0))
        y = int(payload.get("y", 0))
    else:
        x = int(request.GET.get("x", 0))
        y = int(request.GET.get("y", 0))

    task = add_numbers.delay(x, y)
    return JsonResponse(
        {
            "task_id": task.id,
            "status": "queued",
            "status_url": f"/task-status/{task.id}/",
        },
        status=202,
    )


def task_status(request, task_id):
    task_result = AsyncResult(task_id)

    return JsonResponse(
        {
            "task_id": task_id,
            "status": task_result.status,
            "result": task_result.result if task_result.successful() else None,
        }
    )
