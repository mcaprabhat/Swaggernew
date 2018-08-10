var sw = require("swagger-node-express");
const delay = require('delay');
var authorizationsData = require("./authorizationsData.js");

// the description will be picked up in the resource listing
exports.getAuthorizations = {
    'spec': {
        description : "Operations about authorization",
        path : "/BusinessFoundation-WS/rest/mystart/getmystartlist",
        method: "GET",
        summary : "Retrieves visibility rules.",
        notes : "This service is related to components visibility on the UI. It is important to notice that invisible components should not have returned information from hybris server on its specific integration, it means that UI is just hiding fields, the information is not there anyway.",
        type : "ResponseAuthorizations",
        nickname : "getAuthorizations",
        produces : ["application/json"],
        parameters : [
            {
                "name": "page_id",
                "description": "Page where attributes will be loaded",
                "required": true,
                "type": "string",
                "paramType": "query"
            }
        ],
        responseMessages : [
            {
                code: 200,
                message: "OK"
            },
            {
                code: 400,
                message: "Bad request"
            },
            {
                code: 401,
                message: "Unauthorized"
            },
            {
                "code": 404,
                "message": "Not found."
            },
            {
                code: 500,
                message: "Internal Server Error"
            }
        ]
    },
    'action': function (req,res) {
        delay(20000)
            .then(() => {
            // Executed after 200 milliseconds
            console.log("werrtttttttttttttttttttt");

        var entry = req.query.page_id;
        var output = authorizationsData.getAuthorizations(entry);
        if (!output){
            //error
            var error ={} ;
            error.severity = 'Error';
            error.code = 'E-X';
            error.parameters=['Unauthorized'];

            output = {};
            output.authorizations = [];
            output.errors = error;

            res.json(401, output);
        } else {
            res.json(output);
        }
    });
    }
};
