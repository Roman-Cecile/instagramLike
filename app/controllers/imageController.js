const { Image } = require('../models');

const imageController = {

    getAll: async (req, res, next) => {
        try {
            const allImages = await Image.findAll({
                include: [{
                    all: true,
                    nested: true
                }]
            });
            res.send(allImages)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const id = req.params.id
            const oneImage = await Image.findByPk(id);

            if (!oneImage) {
                return res.send("Cette image n'existe pas");
            }

            res.send(oneImage);

        } catch (error) {
            console.trace(error);
            res.status(500).send(`Nous n'avons pas réussi à afficher l'image`);
        }

    },

    create: async (req, res, next) => {
        try {

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('Aucune photo n\'a été téléchargée');
              }
            
            let sampleFile = req.files.image;

            sampleFile.mv(sampleFile.tempFilePath = `/var/www/html/projetperso/instagram/public/picture/${sampleFile.name}`);
            
            const newImage = await Image.create({
                name: req.body.name,
                path: `/picture/${sampleFile.name}`,
                app_user_id: req.body.app_user_id
            });

            res.send(newImage)
        } catch (error) {
            console.trace(error);
            res.status(500).send("La création à échoué")
        }


    },

    update: async (req, res, next) => {
        try {
            const id = req.params.id;
            const oneImage = await Image.findByPk(id);

            if (!oneImage) {
                return res.send("Cette image n'existe pas");
            }

            const updateImage = await oneImage.update({
                name: req.body.name
            });

            res.send(updateImage);


        } catch (error) {
            console.trace(error);
            res.status(500).send("La mise à jour a échoué")
        }
    },

    delete: async (req, res, next) => {
        try {
            const id = req.params.id;
            const oneImage = await Image.findByPk(id);
            await oneImage.destroy();
            res.send("Photo supprimée");
        } catch (error) {
            console.trace(error);
            res.status(500).send("La suppression a échoué");
        }

    }
}




module.exports = imageController;