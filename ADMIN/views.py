from django.shortcuts import render
from .models import User

def index(request):
    users = User.objects.all()
    context = {"users": users}  # lowercase variable name to match the template
    return render(request, 'SUPER_ADMIN/index.html', context)
