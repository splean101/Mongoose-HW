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
        type: String,
        enum: ['[Sidhe Interactive]', '[Targem Games]', '[Legend Studio]', '[Ubisoft Montpellier]', '[id Software]']
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    }
}, { versionKey: false });
let GameModel = mongoose.model('Game', GameShema)

class Game {
    constructor(name, platform, developers, price) {
        this.name = name;
        this.platform = platform;
        this.developers = developers;
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
    const client = await mongoose.connect('mongodb://localhost:27017/gamesdb', { useNewUrlParser: true });
    //const res = await GameModel.create(games); //adding all documents
    //console.log(res);
    //const updShatter = await GameModel.updateOne({name: 'Shatter'}, {price: 15}); //updating price
    //const updAsteria = await GameModel.updateOne({name: 'Asteria'}, {price: 5}); //updating price
    //const updDoom = await GameModel.updateOne({name: 'Doom'}, {price: 40}); //updating price
    //const consoleAll = await GameModel.find(); //consoling all documents
    //console.log(consoleAll);
    //const getAsteria = await GameModel.findOne({name: 'Asteria'}); //getting by name
    //console.log(getAsteria);
    //const getAllName = await GameModel.find();
    //getAllName.forEach(res => {  //getting all names
    //    if (res.name) console.log(res.name);
    //});
    const delByPlatform = await GameModel.deleteMany({ platform: 'Playstation 4' });
    client.disconnect();
}());