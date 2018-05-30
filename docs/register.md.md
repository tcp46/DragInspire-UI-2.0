# User Registration
Used to add a user instance from the UI form to the database.

**URL**: `/register`
**METHOD**: `POST`
**AUTH Required**: NO
**Data Constraints** <br>
```json
{
    "email": "<valid drexel email>",
    "password": "<unhashed password>"
}
```
**Data Example** <br>
```json
{
    "email": "ela43@drexel.edu",
    "password": "password123"
}
```
## Success Response
**Code**: `200 OK`
**Content Example**
```json
{
	user: {
	    firstName: "Elliot",
	    lastName: "Anderson",
	    email: "ela43@drexel.edu",
	    password: "$2a$10$STbE7CjP0VjjUarhyWLNMe7WoStt89Hswco/5YbbTPpP3YHHqbU82",
	    gradYear: 2022,
	    college: "College of Computing and Informatics",
	    major: "Computer Science",
	    skills: [
		    "CSS3", "html5", "laravel", "python", "php"
		]
	},
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkVsbGlvdCBBbmRlcnNvbiIsImlhdCI6MTUxNjIzOTAyMn0.amILOIOhMyzvuy_Jr8y4IwQ_z2vYvEYm1lyWKmYpvfw"
}
```
## Error Response
**Condition**: If email account is already in use.
**Code**: `400 Bad Request`
**Content**
```javascript
{
	error: "Email already in use."
}
``` 
***
**Condition**: Invalid form request
**Code**: `400 Bad Request`
**Content**
```json
{
    error: "Your form was incomplete.  Please make sure you filled out all required sections"
}
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MDk2MDQ1MjVdfQ==
-->