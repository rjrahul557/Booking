const { StatusCodes} = require('http-status-code');

class ServiceError extends Error {
    constructor(
        message = 'Somrthing Went Wrong',
        explanation = 'service layer error',
        statusCode = StatusCodes. INTERNAL_SERVER_ERROR

    ){
        super();
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}


module.exports = ServiceError;