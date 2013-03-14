from django.db import models

class Project(models.Model):
    name = models.TextField()
    def __unicode__(self):
        return self.name

class Tag(models.Model):
    name = models.TextField()
    def __unicode__(self):
        return self.name


class Task(models.Model):
    text = models.TextField()
    project = models.ForeignKey(Project)
    tags = models.ManyToManyField(Tag)

    def __unicode__(self):
        return '%s: %s' % (self.project.name, self.text)
