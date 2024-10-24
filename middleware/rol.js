const { handleHttpError } = require("../utils/handleError")

const checkRol = (roles) => (req, res, next) => { // Doble argumento

    try {

        const { user } = req

        const userRol = user.role
        for ( let i = 0; i <= userRol.length; i++){
            const checkValueRol = roles.includes(userRol[i])
            if ( checkValueRol){
                return next()
            }
        }
        

        //const checkValueRol = roles.includes(userRol) //Comprobamos que el rol del usuario esté en roles

        if (!checkValueRol) {

            handleHttpError(res, "NOT_ALLOWED", 403)

            return

        }

        next()

    } catch (err) {

        handleHttpError(res, "ERROR_PERMISSIONS", 403)

    }

}



module.exports = checkRol