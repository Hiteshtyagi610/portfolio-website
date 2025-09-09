from django.http import HttpResponse
from django.shortcuts import render


def about(reqeust):
    return render(reqeust,'about.html')

def contact(reqeust):
    return render(reqeust,'contact.html')

def home(reqeust):
    return render(reqeust,'index.html')

def projects(reqeust):
    return render(reqeust,'projects.html')

