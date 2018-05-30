# Create Project
For a logged-in user to create a project based on skills they are seeking.  Project has name and description.

 **URL**: `/project`
 **METHOD**: `POST`
 **AUTH REQUIRED**: YES
 **Data Constraints**
 ```json
{
	name: "<project title>,
	description: <up to 1000 characters describing project>,
	skills: <skills seeking separated by comma>
}
```

## Success Response
**Code**: `200 OK`
**Content Example**
```javascript
{
    project: {
	    id: 2,
	    owner: {
		    id: 4,
		    ...usermodel...
	    },
	    skills: [array of skills required],
	    name: "REST API for Bitcoin Market Tracking",
	    description: "I am looking for an iOS developer and Android developer..."
    }
}
```

## Error Response
**Condition**: User not logged in
**Code**: `403 Forbidden`
**Content**
```javascript
{
	error: "Session unauthorized.  Please log in"
}
```
***
**Condition**: Invalid inputs
**Code**: `400 Bad Request`
**Content**
```javascript
{
	error: "Make sure to fill out every input required"
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjE4Nzc5OTMzXX0=
-->