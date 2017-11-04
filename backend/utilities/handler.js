
class Handler {
    
        constructor() { }
    
        respond(res, error) {
            if (error) {
                const response = { error: error }
                return res.status(400).send(response)
            }
            
            res.sendStatus(200)
        }
        
        respondToError(res, error) {
            const response = { error: error }
            res.status(400).send(response)
        }
    
        respondToResult(res, error, result) {
            if (!result) {
                const response = { error: 'could not find result' }
                return res.status(400).send(response)
            }
    
            if (error) {
                const response = { error: 'error' }
                return res.status(400).send(response)
            }

            res.status(200).send(result)
        }
    
        respondToResults(res, error, results) {
            if (error) {
                const response = { error: 'error' }
                return res.status(400).send(response)
            }

            res.status(200).send(results)
        }
    
        respondToInvalidParams(res, requiredParams) {
            const response = { paramsRequired: requiredParams }
            res.status(400).send(response)
        }
    
    }
    
    export default new Handler()