# User Login
 Used to log in a user with the JWT token returned during registration, along with the user object to make sure the token belongs to the correct user.

**URL**: `/login`
**METHOD**: `POST`
**AUTH Required**: NO
**Data Constraints**
```javascript
{
    "email": "<registered user-email>",
    "password": "<un-hashed user-password">",
    "token": "<jwt token from server>"
}
```
## Success Response
**CODE**: `200 OK`
**Content Example**
```javascript
{
    user: {
	    "firstName": "Elliot",
	    ...
		*user model*
		...
	    "password": <encrypted password>
    },
    token: <jwt-token for user>
}
```
## Error Response
**Condition**: Invalid email/password configuration
**CODE**: `403 Forbidden`
**Content**
```javascript
{
    error: "Invalid email/password combination"
}
```
***
**Condition**: Invalid JWT Token
**Code**: `403 Forbidden`
**Content**
```javascript
{
	error: "Invalid token"
}
```
***
**Condition**: Email not found in database.
**Code**: `403 Forbidden`
**Content**
```javascript
{
   error: "Email not found in our records to match any user"
}
```
***
**Condition**: Incomplete form
**Code**: `400 Bad Request`
**Content**
```javascript
{
   error: "You must complete all form elements." 
}
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbNDgzNjc3NzQ5XX0=
-->