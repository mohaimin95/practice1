// (req,res,next) => {}
const auth = (req,res,next) => {
    let token = req.headers.authorization;
    if(token) {
        req.user = {
            id:1,
            username:"Alice"
        }
        next();
    } else {
        res.status(401).send({message:"Unauthorized request !"});
    }
}

module.exports = auth;