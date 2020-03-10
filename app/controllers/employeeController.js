const methods = {};
const Employee = require("../models/employeeModel");
const { ObjectId } = require("mongoose").Types
methods.get = () => {
    return new Promise((resolve, reject) => {
        Employee.find({}, (err, docs) => {
            if (err) {
                return reject({ message: "Error" });
            } else {
                return resolve(docs);
            }
        });
    });
}
methods.getById = (id) => {
    return new Promise((resolve, reject) => {
        if (ObjectId.isValid(id)) {
            Employee.findById(id, (err, docs) => {
                if (err) {
                    return reject({ message: "Error",status:500 });
                } else {
                    if(!docs) {
                        return reject({message:"Employee Not Found !",status:404})
                    } else {
                        return resolve(docs);
                    }
                }
            });
        } else {
            return reject({ message: "Invalid Object ID",status:400 })
        }
    });
}

module.exports = methods;