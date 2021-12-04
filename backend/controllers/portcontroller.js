const Port = require('../models/portmodel');


//createPort nous permet d'ajouter un port à la base de données
exports.createPort = (req,res) => {
    const capitainerie = new Port(req.body); //appel du schéma Port.

    capitainerie.save() //sauvegarde la nouvelle donnée
    .then((port) => {
        return res.status(201).json({port}) //201 correpond à la création
    })
    .catch((error) => {return res.status(400).json({error}) // retourne 404 à l'entré
    });
}

//permettant d'obtenir un produit unique
exports.getOnePort = (req,res) => {
    const id = req.params.id; //récupère l'id inscrit dans l'adresse url

    Port.findOne({_id: id}) //permet de trouver le port correspondant à l'id.
    .then((port) => {
        return res.status(200).json({port}) //200 correspond à la bonne récupération d'un id
    })
    .catch((error) => {return res.status(400).json({error}) //400 pour une rechercher non aboutie.
    });
}


//permettant d'obtenir tout les produits
exports.getAllPorts = (req,res) => {
    Port.find() //ici nous n'indiquons aucun id, nous allons donc récupérer l'ensemble des ports.
    .then((ports) => {
        return res.status(200).json({ports}) //200 correspond à la bonne récupération d'un id
    })
    .catch((error) => {return res.status(400).json({error}) //400 pour une rechercher non aboutie.
    });
}

//permettant de mettre à jour un produit
exports.updateOnePort = (req,res) => {
    const id = req.params.id; //récupère l'id inscrit dans l'adresse url

    Port.findByIdAndUpdate(id, req.body) //trouve le port correspondant et le mettre à jour avec les infos du body.
    .then((port) => {
        return res.status(201).json({port}) //201 correpond à la création
    })
    .catch((error) => {return res.status(400).json({error}) //modifcations non réussies.
    });
}

exports.deleteOnePort = (req,res) => {
    const id = req.params.id; //récupère l'id inscrit dans l'adresse url

    Port.findByIdAndDelete(id, req.body) //trouve le port correspondant et le supprime de la base de données
    .then((port) => {
        return res.status(203).send({message : `port with id ${id} was correctly delete`}) //203 correpond à la suppression
    })
    .catch((error) => {return res.status(404).json({error}) //requête non aboutie/
    });
}



