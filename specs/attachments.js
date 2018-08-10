var sw = require("swagger-node-express");

var attachmentsData = require("./attachmentsData.js");

exports.getAttachments = {
    'spec': {
        path : "/complaints/complaintDetails",
        method: "GET",
        summary : "POST documents attached",
		notes : "",
        type : "ResponseAttachments",
        nickname : "getAttachments",
        parameters : [
            {
                "name": "complaintId",
                "description": "Filters the documents attached search.",
                "required": false,
                "type": "FilterAttachments",
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
        //get body
        var body = req.query;
		        console.log(body);

        var output = attachmentsData.getAttachments(body);
        var outputError = [];

        var response = {
            attachmentList: output,
            errors: outputError
        };

        res.json(response);
    }
};
