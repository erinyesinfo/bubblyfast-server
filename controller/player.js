const Player30Sec = require("../models/Player30Sec");
const Player2Mn = require("../models/Player2Mn");
const Player10Mn = require("../models/Player10Mn");

exports.createPlayer30Sec = function(req, res) {
    const player = new Player30Sec(req.body);
    player.createPlayer().then(data => {
        res.send(data);
    }).catch(() => {
        res.send("failure");
    });
};
exports.readPlayer30Sec = function(req, res) {
    const player = new Player30Sec();
    player.readPlayers().then(players => {
        res.send(JSON.stringify(players));
    }).catch(() => {
        res.send("failure");
    });
};

// 2 mn players
exports.createPlayer2Mn = function(req, res) {
    const player = new Player2Mn(req.body);
    player.createPlayer().then(data => {
        res.send(data);
    }).catch(() => {
        res.send("failure");
    });
};
exports.readPlayer2Mn = function(req, res) {
    const player = new Player2Mn();
    player.readPlayers().then(players => {
        res.send(JSON.stringify(players));
    }).catch(() => {
        res.send("failure");
    });
};

// 10 mn players
exports.createPlayer10Mn = function(req, res) {
    const player = new Player10Mn(req.body);
    player.createPlayer().then(data => {
        res.send(data);
    }).catch(() => {
        res.send("failure");
    });
};
exports.readPlayer10Mn = function(req, res) {
    const player = new Player10Mn();
    player.readPlayers().then(players => {
        res.send(JSON.stringify(players));
    }).catch(() => {
        res.send("failure");
    });
};
