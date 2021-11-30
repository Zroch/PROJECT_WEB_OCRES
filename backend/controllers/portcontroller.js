const Port = require('../models/portmodel');

exports.createPort = (req,res) => {
    const capitainerie = new Port(req.body);

    capitainerie.save()
    .then((port) => {
        return res.status(201).json({port}) //201 correpond à la création
    })
    .catch((error) => {return res.status(400).json({error}) 
    });
}

//permettant d'obtenir un produit unique
exports.getOnePort = (req,res) => {
    const id = req.params.id;

    Port.findOne({_id: id})
    .then((port) => {
        return res.status(200).json({port}) //200 correspond à la bonne récupération d'un id
    })
    .catch((error) => {return res.status(400).json({error})
    });
}


//permettant d'obtenir tout les produits
exports.getAllPorts = (req,res) => {

    Port.find()
    .then((ports) => {
        return res.status(200).json({ports}) //200 correspond à la bonne récupération d'un id
    })
    .catch((error) => {return res.status(400).json({error})
    });
}

//permettant de mettre à jour un produit
exports.updateOnePort = (req,res) => {
    if(!req.body){
        return res.status(400).send({message:"data update can not be empty"})
    }

    const id = req.params.id;
    Port.findByIdAndUpdate(id, req.body)
    .then((port) => {
        return res.status(201).json({port}) //201 correpond à la création
    })
    .catch((error) => {return res.status(400).json({error}) 
    });
}

exports.deleteOnePort = (req,res) => {
    if(!req.body){
        return res.status(400).send({message:"data update can not be empty"})
    }

    const id = req.params.id;
    Port.findByIdAndDelete(id, req.body)
    .then((port) => {
        return res.status(203).send({message : `port with id ${id} was correctly delete`}) //203 correpond à la suppression
    })
    .catch((error) => {return res.status(404).json({error}) 
    });
}



