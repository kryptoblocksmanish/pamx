class Response{
    constructor(){}

    static success(req, res, message,  data){
        res.status(200).json({
            status: 200,
            message: message || 'Success',
            data: data
        });
    }

    static notFound(req, res, message, data){
        res.status(404).json({
            status: 404,
            message: message || 'Not Found',
            data: data
        });
    }

    static existsAlready(req, res, message, data){
        res.status(300).json({
            status: 300,
            message: message || 'Already Exists',
            data: data
        });
    }

    static badRequest(req, res, message, data){
        res.status(400).json({
            status: 400,
            message: message || 'bad request or insuffecient information',
            data: data
        });
    }

    static unauthorized(req, res, message, data){
        res.status(401).json({
            status: 401,
            message: message || 'Unauthorized.',
            data: data
        });
    }



    static serverError(req, res, message, errorMessage){
        res.status(500).json({
            status: 500,
            message: message || 'internal server error',
            data: { details: errorMessage }
        });
    }
}

module.exports = Response;