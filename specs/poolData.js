var poolData = {
    poolDatas: [
			{request_id  :   "12345678",    data: {
			    }
            }
        ],
        errors: [{
            severity: "",
            code: "",
            parameters: [
                {
                    Value: ""
                }
            ]
        }]
};

exports.getpoolData = function getpoolData(page) {
    var output;
    console.log(page);
    if (page=="1")
    {
        output = {};
        output.pool = poolData.poolDatas;
        output.errors = null;
    }
    return output;
};

