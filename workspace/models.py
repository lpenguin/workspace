from django.db import models
import mptt
#class Node(models.Model)


class Tag(models.Model):
    name = models.TextField()
    def __unicode__(self):
        return self.name

class Node(models.Model):
    parent = models.ForeignKey('self', blank=True, null=True)
    name = models.CharField(max_length=128, blank=True, null=True)
    class Meta:
        abstract = True


class Workspace(Node):
    def __unicode__(self):
        return self.name

#    name = models.TextField()

class Entry(Node):
    def get_workspace(self):
        return (Workspace)(self.parent)
    def __unicode__(self):
        return self.name+'@'+self.get_workspace().name


class EntryNode(Node):
    def get_entry(self):
        p = self.parent
        while p != None:
            if p is Entry:
                return p
            else:
                p = p.parent
            return self.parent
        return None
    def __unicode__(self):
        return self.name+'@'+self.get_entry().name


class Note(EntryNode):
    text = models.TextField(blank=True)

class Todo(EntryNode):
    pass
#    text = models.TextField(blank=True)

class Link(EntryNode):
    description = models.TextField(blank=True)
    url = models.URLField()
