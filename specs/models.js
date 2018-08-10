exports.models = {
    "Error": {
        "id": "Error",
        "properties": {
            "severity": {
                "required": true,
                "type": "string",
                "enum": [
                    "Error",
                    "Warning"
                ]
            },
            "code": {
                "required": true,
                "type": "string"
            },
            "parameters": {
                "required": true,
                "type": "array",
                "items":
                {
                    type: 'string'
                }
            }
        }
    }
    ,
    "MyStartDTO":{
        "copyFlag": {
            "required": true,
            "type": "boolean",
            "description": "copyFlag"
        },
        "myStartName": {
            "required": true,
            "type": "string",
            "description": "myStartName"
        }
        ,
        "subscribed": {
            "required": true,
            "type": "string",
            "description": "subscribed"
        }
        ,
        "listType": {
            "required": true,
            "type": "integer",
            "description": "listType"
        },
        "noOfSubscribers": {
            "required": true,
            "type": "integer",
            "description": "myStartName"
        },
        "myStartId": {
            "required": true,
            "type": "integer",
            "description": "myStartName"
        },
        "myStartType": {
            "required": true,
            "type": "string",
            "description": "myStartType"
        },
        "published": {
            "required": true,
            "type": "string",
            "description": "published"
        },
        "userId": {
            "required": true,
            "type": "string",
            "description": "userId"
        },
        "msorId": {
            "required": true,
            "type": "integer",
            "description": "msorId"
        },
        "sequence": {
            "required": true,
            "type": "integer",
            "description": "sequence"
        }

    }
};