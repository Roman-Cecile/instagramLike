const { Comment } = require('../models');

const commentController = {

    getAll: async (req, res, next) => {
        try {
            const allComment = await Comment.findAll({
                include: [{
                    all: true,
                    nested: true
                }]
            });
            res.send(allComment)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const oneComment = await Comment.findByPk(id);

            if (!oneComment) {
                return res.send("Ce n'existe pas");
            }

            res.send(oneComment);

        } catch (error) {
            console.trace(error);
            res.status(500).send(`Nous n'avons pas réussi à afficher le commentaire`);
        }

    },

    create: async (req, res, next) => {
        try {
            const newComment = await Comment.create(req.body);

            res.send(newComment)
        } catch (error) {
            console.trace(error);
            res.status(500).send("La publication du commentaire a échoué")
        }


    },

    update: async (req, res, next) => {
        try {
            const id = req.params.id;
            const oneComment = await Comment.findByPk(id);

            if (!oneComment) {
                return res.send("Ce commentaire n'existe pas");
            }

            const updateComment = await oneComment.update(req.body);

            res.send(updateComment);


        } catch (error) {
            console.trace(error);
            res.status(500).send("La mise à jour a échoué")
        }
    },

    delete: async (req, res, next) => {
        try {
            const id = req.params.id;
            const oneComment = await Comment.findByPk(id);
            await oneComment.destroy();
            res.send("Commentaire supprimée");
        } catch (error) {
            console.trace(error);
            res.status(500).send("La suppression a échoué");
        }

    }

}

module.exports = commentController;