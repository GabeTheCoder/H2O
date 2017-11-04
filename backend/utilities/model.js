
class Model {

        constructor() { }

        createModel(req) {
            this.req = req
            this.invalidParams = []
    
            this.mongoObject = null
            this.mongoUpdate = null
    
            var modelObject = {}
            var modelUpdate = {}
    
            for (let key in this.required) {
                let type = this.required[key]
                let parameter = this.req.body[key]
    
                if (parameter && this.validateTypes(parameter, type)) {
                    modelObject[key] = parameter
                    modelUpdate[key] = parameter
                } else {
                    modelObject[key] = null
    
                    let invalidParam = { param: key, type: type }
                    this.invalidParams.push(invalidParam)
                }
            }
    
            for (let key in this.optional) {
                let type = this.optional[key]
                let parameter = this.req.body[key]
    
                if (parameter && typeof parameter == type) {
                    modelObject[key] = parameter
                    modelUpdate[key] = parameter
                } else {
                    modelObject[key] = null
                }
            }
    
            for (let key in this.created) {
                let value = this.created[key]
                
                modelObject[key] = value
                modelUpdate[key] = value
            }
    
            this.mongoUpdate = modelUpdate
    
            if (this.invalidParams.length == 0) {
                this.mongoObject = modelObject
            }
        }
    
        validateTypes(param, requiredType) {
            if (typeof param == requiredType) {
                return true
            }

            return false
        }
    
    }
    
    module.exports = Model