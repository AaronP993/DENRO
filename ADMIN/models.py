from django.db import models

# Create your models here.
class User(models.Model):
    class GenderChoices(models.TextChoices):
        MALE = 'Male'
        FEMALE = 'Female'
        OTHER = 'Other'

    class RoleChoices(models.TextChoices):
        SUPER_ADMIN = 'Super Admin'
        ADMIN = 'Admin'
        PENRO = 'PENRO'
        CENRO = 'CENRO'
        EVALUATOR = 'Evaluator'

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GenderChoices.choices)
    email = models.EmailField(unique=True, max_length=255)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    region = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=RoleChoices.choices)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    profile_pic = models.CharField(max_length=255, blank=True, null=True)
    
    def __str__(self):
        return (
            f"E-ID: {self.id}, Firstname: {self.first_name}, Lastname: {self.last_name}, "
            f"Gender: {self.gender}, Cp.no.: {self.phone_number}, Region: {self.region}, "
            f"Role: {self.role}, Username: {self.username}, Password: ********, "
            f"Profile: {self.profile_pic}"
        )

