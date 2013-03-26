__author__ = 'npryanichnikov'
from django.contrib import admin
from models import *


admin.site.register(Tag)
admin.site.register(Workspace)
admin.site.register(Todo)
admin.site.register(Note)
admin.site.register(Entry)
admin.site.register(Link)

