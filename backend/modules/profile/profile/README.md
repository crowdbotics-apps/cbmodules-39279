# Profile backend configuration and Info

After Installing this package user have to add "Profile" to installed Apps in settings.py file <br>

``
INSTALLED_APPS = ['Profile']
``

Before starting the server run:

```sh
python manage.py migrate
```

## Api Table
List of api's endpoints with params needed for these apis.

| Api Name                           |         Param          | Request Method | Description                                                           |
|------------------------------------|:----------------------:|----------------|:----------------------------------------------------------------------|
| `module/profile/user-profile/`     |          None          | GET            | Get all the user profiles.                                            |
| `module/profile/user-profile/`     |      request.body      | POST           | Update user if user profile is already exist else create user profile |
| `module/profile/user-profile/{id}` | request.body, url `id` | PATCH          | Update Single Field of Profile Table                                  |
| `module/profile/user-profile/{id}` |        url `id`        | GET            | Get Specific user profile based on user id                            |
| `module/profile/user-profile/{id}` |        url `id`        | DELETE         | Delete user profile.                                                  |


