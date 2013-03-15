# Create your views here.
from django.http import HttpResponse

from django.shortcuts import render_to_response
from django.template import Context, loader
from models import *
import json
def task_add(request):

    try:
        project_name = request.POST["project_name"]
        text = request.POST["text"]
        project = Project.objects.get(name=project_name)
        task = Task(text=text, project=project)
        task.save()
        return HttpResponse(json.dumps({'status': 'ok'}))
    except:
        return HttpResponse(json.dumps({'status': 'error'}))

def index(request):
    c = Context({})
    return render_to_response('index.html', c)