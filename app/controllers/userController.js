const {
    User
} = require('../models');
const bcrypt = require('bcrypt');

function getUpperCaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const userController = {

    getAll: async (req, res, next) => {
        try {
            const allUsers = await User.findAll({
                include: [{
                    all: true,
                    nested: true
                }]
            });
            res.send(allUsers)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const userFirstName = getUpperCaseFirstLetter(req.params.userFirstName);
            const oneUser = await User.findOne({
                where: {
                    id: id,
                    firstname: userFirstName
                }
            });

            if (!oneUser) {
                return res.send("Cet utilisateur n'existe pas");
            }

            res.render('user', {
                user: oneUser
            });

        } catch (error) {
            console.trace(error);
            res.status(500).send(`Nous n'avons pas réussi à afficher' ${req.params.userFirstName}`);
        }

    },

    create: async (req, res, next) => {
        try {
            const data = req.body;
            let errors = [];

            if (!req.body.firstname) {
                errors.push("Veuillez renseigner votre prénom");
            }
            if (!req.body.lastname) {
                errors.push("Veuillez renseigner votre nom");
            }
            if (!req.body.email) {
                errors.push("Veuillez renseigner votre email");
            }
            if (!req.body.password) {
                errors.push("Veuillez renseigner votre mot de passe");
            }

            if (errors.length) {
                return res.render('signup', {
                    errors
                })
            }

            const hashedPw = await bcrypt.hashSync(data.password, 10)

            const newUser = await User.create({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: hashedPw
            });

            res.redirect(`/user/${newUser.id}/${newUser.firstname}`)
        } catch (error) {
            console.trace(error);
            res.status(500).send("La création à échoué")
        }


    },

    update: async (req, res, next) => {
        try {
            const id = req.params.id;
            const userFirstName = getUpperCaseFirstLetter(req.params.userFirstName);
            const data = req.body;
            const oneUser = await User.findOne({
                where: {
                    firstname: userFirstName,
                    id: id
                }
            });

            if (!oneUser) {
                return res.send("Cet utilisateur n'existe pas");
            }

            let hashedPw;

            if (req.body.password) {
                hashedPw = await bcrypt.hashSync(data.password, 10);
            }

            const updateUser = await oneUser.update({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: hashedPw
            });

            res.send(updateUser)


        } catch (error) {
            console.trace(error);
            res.status(500).send("La mise à jour a échoué")
        }
    },

    delete: async (req, res, next) => {
        try {
            const id = req.params.id;
            const userFirstName = getUpperCaseFirstLetter(req.params.userFirstName);
            const oneUser = await User.findOne({
                where: {
                    firstname: userFirstName,
                    id: id
                }
            });
            await oneUser.destroy();
            res.redirect('/signup');
        } catch (error) {
            console.trace(error);
            res.status(500).send("La suppression a échoué");
        }

    }
}




module.exports = userController;