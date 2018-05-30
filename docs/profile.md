# User Profile
Returns all the information based on the user's submitted profile and any model relationships pertaining to the user (skills, projects, etc).

**URL**: `/profile/:id`
 **METHOD**: GET
 **AUTH Requred**: YES
**Data Constraints**: Profile ID must be valid AND belong to the User who created it / belongs to the project.

## Success Response
**CODE**: `200 OK`
**Content Example**
```javascript
{
   project: {
	   id: 4,
	   owner: {
		   id: 2 # User ID 2
		   firstName: "..."
		   ...
	   }
	   skills: [
		   "html5", "python", "..."
	   ],
	   createdAt:
   }
}
```
## Error Response
**Condition**: Project ID does not exist
**Code**: `400 Bad Request`
**Content**
```javascript
{
   error: "Invalid Project ID"
}
```
***
**Condition**: User does not belong to Project (either as owner or member)
**Code**: `403 Forbidden`
**Content**
```javascript
{
	error: "You do not have access to view this project"
}
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQzMjc4OTE3NF19
-->