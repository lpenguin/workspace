from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from workspace import views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'wkspc.views.home', name='home'),
    # url(r'^wkspc/', include('wkspc.foo.urls')),
    url(r'^json/task/add/', views.task_add),
    url(r'^$', views.index),
    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

)
