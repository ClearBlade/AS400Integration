var uri="http://TOMCAT_SERVER_IP:8080/noviAS400/CallProgram";

function callAS400Program(programName, PCMLDef, inputs, callback) {
    
    var payload={
        "ProgramName":programName,
        "PCMLDef":PCMLDef,
        "Inputs":inputs
    }
    
    var options = {
        uri: uri,
        timeout:20000,
        body: payload,
        headers: {
            "Content-type": "application/json"
        }
    };
    var requestObject = ClearBlade.http().Request();
    requestObject.post(options, function(err, response) {
        callback(err, response);
    });
}