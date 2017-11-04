
import db from '../utilities/db'

class Users {

    getUser(id, callback) {
        const userId = db.objectId(id)

        db.users.findOne({_id: userId}, (error, result) => { 
            callback(error, result)
        })
    }

}

export default new Users()