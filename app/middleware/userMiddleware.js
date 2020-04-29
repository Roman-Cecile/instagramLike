const userMiddleware = {

    isUser: (req, res, next) => {
        if(req.session.user.id === req.params.id){
            next()
        }
    }
}

module.exports = userMiddleware;