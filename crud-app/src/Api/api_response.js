const Response = {
    _success(data = {}){
        return {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Methods' : '*',
                'Access-Control-Allow-Origin': '*'
            },
            statusCode : 200,
            body : JSON.stringify(data)
        }
    },
    _failure(data = {}){
        return {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Methods' : '*',
                'Access-Control-Allow-Origin': '*'
            },
            statusCode : 400,
            body : JSON.stringify(data)
        }
    }
}

module.exports = Response;