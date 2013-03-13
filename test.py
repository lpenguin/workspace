import argparse

__author__ = 'npryanichnikov'

parser = argparse.ArgumentParser()
parser.add_argument('action')
parser.add_argument('-p', dest='project')
parser.add_argument('-t', dest='tag')
parser.add_argument('words',   nargs="+")

command = "add -p proj -t sometag hello fucking world, die & shut up mother fucker"
res = parser.parse_args(command.split())
#print parser.parse_args(command.split())
print res
print res.action
print res.tag
print res.project
print ' '.join(res.words)


