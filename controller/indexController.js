
const response = require('./../response')

exports.index = (req, res) =>{
    response.status("hello REST", res)
}