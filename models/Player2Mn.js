const usersCollection = require("../db").db().collection("users");
const playerCollection = require("../db").db().collection("player-2mn");
const ObjectID = require("mongodb").ObjectID;

const Player = function(data) {
  this.data = data;
  this.errors = [];
};

Player.prototype.createPlayer = function() {
  return new Promise(async (resolve, reject) => {
    const readUser = await usersCollection.find({ _id: ObjectID(this.data.id) }).toArray();
    const data = {
      username: readUser[0].username,
      points: this.data.points,
      author: ObjectID(this.data.id),
    };
    
    const readPlayer = await playerCollection.find({ author: ObjectID(this.data.id) }).toArray();
    if (readPlayer[0].points < data.points) {
      await playerCollection.findOneAndUpdate(
        { author: ObjectID(this.data.id) },
        { $set: { points: data.points } }
      );
      return resolve('success');
    } else if (readPlayer[0].points > data.points) {
      return resolve('success');
    }
    await playerCollection.insertOne(data);
    resolve('success')
  });
};

Player.prototype.readPlayers = function() {
  return new Promise(async (resolve, reject) => {
    const read = await playerCollection.find().sort({ points: -1 }).toArray();
    resolve(JSON.stringify(read));
  });
};

module.exports = Player;
