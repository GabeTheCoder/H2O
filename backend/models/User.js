
import Model from '../utilities/model'

class User extends Model {

    constructor(req) {
        super()
        
        this.required = {
            name: 'string',
            email: 'string'
        }

        this.optional = {
            
        }

        this.created = {
            createdDate: new Date()
        }

        super.createModel(req)
    }

}

module.exports = User