const mongoose = require('mongoose');
const Shema = mongoose.Schema;

let GameShema = new Shema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    platform: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    developers: {
        enum: ['[Sidhe Interactive]', '[Targem Games]', '[Legend Studio]', '[Ubisoft Montpellier]', '[id Software]']
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    }
});

class Game {
    constructor(name, platform, developer, genre, price) {
        this.name = name;
        this.platform = platform;
        this.developer = developer;
        this.price = price;
    }
}
const games = [
    new Game('Shatter', 'PC', '[Sidhe Interactive]', 10),
    new Game('Clutch', 'PC', '[Targem Games]', 10),
    new Game('Asteria', 'PC', '[Legend Studio]', 10),
    new Game('Zombi', 'Playstation 4', '[Ubisoft Montpellier]', 20),
    new Game('Doom', 'Playstation 4', '[id Software]', 20)
];

(async function () {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('gamesdb');
    const coll = await db.collection('games');
    //const res = await coll.insertMany(games); //adding all documents
    //console.log(res);
    //const updShatter = await coll.updateOne({_name: 'Shatter'}, {$set: {_price: 15}}); //updating price
    //const updAsteria = await coll.updateOne({_name: 'Asteria'}, {$set: {_price: 5}}); //updating price
    //const updDoom = await coll.updateOne({_name: 'Doom'}, {$set: {_price: 40}}); //updating price
    //const consoleAll = await coll.find().toArray(); //consoling all documents
    //console.log(consoleAll);
    //const getAsteria = await coll.findOne({_name: 'Asteria'}); //getting by name
    //console.log(getAsteria);
    /*const getAllName = await coll.find().forEach(res => {  //getting all names
        if(res._name) console.log(res._name);
    });*/
    //const sortByGenre = await coll.find().sort({_genre: 1}).toArray();  //getting sorted by genre
    //console.log(sortByGenre);
    const delByPlatform = await coll.deleteMany({ _platform: 'Playstation 4' });
    console.log(delByPlatform.result);
    client.close();
}());