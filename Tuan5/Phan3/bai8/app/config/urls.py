from django.contrib import admin
from django.urls import path

from tasksapp.views import home, task_status, trigger_task

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("trigger-task/", trigger_task, name="trigger-task"),
    path("task-status/<str:task_id>/", task_status, name="task-status"),
]
