var sw = require("swagger-node-express");
const delay = require('delay');
var poolData = require("./poolData.js");

// the description will be picked up in the resource listing
exports.getDataPool = {
    'spec': {
        description : "Operations about authorization",
        path : "/poolData",
        method: "GET",
        summary : "Retrieves pool data from backend.",
        notes : "This service is related to pool the data after time out from server.",
        type : "poolData",
        nickname : "getPoolData",
        produces : ["application/json"],
        parameters : [
            {
                "name": "request_id",
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
        delay(20)
            .then(() => {
            // Executed after 200 milliseconds
            console.log("werrtttttttttttttttttttt");

        var entry = req.query.request_id;
        var output = poolData.getpoolData(entry);
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
