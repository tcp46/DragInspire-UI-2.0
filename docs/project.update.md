# Update Project
Update a project based on the project id -- assuming the user has access to the project.  

**URL**: 	`project/:id`
**METHOD**: `PUT`
**AUTH REQUIRED**: YES
**Data Constraints**
```
{
	name: <project-name>,
	description: <project-description>,
	skills: [<array of skills comma separated>]
}
```
## Success Response
**Code**: `200 OK`
**Content Example**
```
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
**Condition**: Invalid Project ID
**Code**: `400 Bad Request`
**Content**
```
{
	error: "The project ID you entered is invalid"
}
```
***
**Condition**: User not logged In
**Code**: `403 Forbidden`
**Content**
```
{
	error: "Your session has expired.  You must log in to see this information"
}
```
***
**Condition**: Invalid Inputs
**Code**: `400 Bad Request`
**Content**
```
{
	error: "You failed to complete the form requirements."
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQyODczMDcxOSwtOTUxNjU3Nzk5XX0=
-->