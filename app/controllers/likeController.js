const { Like } = require('../models');

const likeController = {

    getAll: async (req, res, next) => {
        try {
            const allLike = await Like.findAll({
                include: [{
                    all: true,
                    nested: true
                }]
            });
            res.send(allLike)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const oneLike = await Like.findByPk(id);

            if (!oneLike) {
                return res.send("Ce like n'existe pas");
            }

            res.send(oneLike);

        } catch (error) {
            console.trace(error);
            res.status(500).send(`Nous n'avons pas réussi à afficher le like`);
        }

    },

    create: async (req, res, next) => {
        try {
            const newLike = await Like.create(req.body);

            res.send(newLike)
        } catch (error) {
            console.trace(error);
            res.status(500).send("L'ajout du like a échoué")
        }


    },

    delete: async (req, res, next) => {
        try {
            const id = req.params.id;
            const oneLike = await Like.findByPk(id);
            await oneLike.destroy();
            res.send("Like supprimé");
        } catch (error) {
            console.trace(error);
            res.status(500).send("La suppression a échoué");
        }

    }

}

module.exports = likeController;