# Backend
 
    Par la suite les utilisateurs pourront alors rentrer les informations sur la capitainerie d'un port associé à une ville.
        Nom du port
        Nombre de places visiteurs
        Horaires
        Prix
        
    Nous utilisons une base de données MONGODB cloud atlas.
    Nous utlisons moogose pour créer des schémas.

    Voici la commande utilisée pour nous connecter à la base de donnée :
        mongodb+srv://<username>:<password>@cluster0.qrgtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    username : ece
    password : eceweb


    Nous avons plusieurs fichiers :
    server : Démarre le serveur et lance l'application app.
    router : Appel les controllers .
    controllers : permettent d'effectuer des requêtes vers la base de données.
    models : schéma permettant le bon enregistrement des données.

    bodyparser pour analyser les requêtes JSON.

    Auteurs :
        Lucas LESCOT & Alexis YOUF