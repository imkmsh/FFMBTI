const User = require("../models/User");
const db = require("../config/db")

const output = {
  hello: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  signup: (req, res) => {
    res.render("signup");
  },
  test: (req, res) => {
    res.render("test")
  },
  results: (req, res) => {
    res.render("results/results")
  },
  ENTP: (req, res) => {
    res.render("results/ENTP")
  },
  ENTPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ENTP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ENTPfriends", {data: results})}})
  },
  ENTJ: (req, res) => {
    res.render("results/ENTJ")
  },
  ENTJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ENTJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ENTJfriends", {data: results})}})
  },
  ENFP: (req, res) => {
    res.render("results/ENFP")
  },
  ENFPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ENFP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ENFPfriends", {data: results})}})
  },
  ENFJ: (req, res) => {
    res.render("results/ENFJ")
  },
  ENFJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ENFJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ENFJfriends", {data: results})}})
  },
  ESTP: (req, res) => {
    res.render("results/ESTP")
  },
  ESTPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ESTP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ESTPfriends", {data: results})}})
  },
  ESTJ: (req, res) => {
    res.render("results/ESTJ")
  },
  ESTJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ESTJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ESTJfriends", {data: results})}})
  },
  ESFP: (req, res) => {
    res.render("results/ESFP")
  },
  ESFPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ESFP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ESFPfriends", {data: results})}})
  },
  ESFJ: (req, res) => {
    res.render("results/ESFJ")
  },
  ESFJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ESFJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ESFJfriends", {data: results})}})
  },
  INTP: (req, res) => {
    res.render("results/INTP")
  },
  INTPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'INTP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/INTPfriends", {data: results})}})
  },
  INTJ: (req, res) => {
    res.render("results/INTJ")
  },
  INTJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'INTJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/INTJfriends", {data: results})}})
  },
  INFP: (req, res) => {
    res.render("results/INFP")
  },
  INFPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'INFP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/INFPfriends", {data: results})}})
  },
  INFJ: (req, res) => {
    res.render("results/INFJ")
  },
  INFJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'INFJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/INFJfriends", {data: results})}})
  },
  ISTP: (req, res) => {
    res.render("results/ISTP")
  },
  ISTPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ISTP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ISTPfriends", {data: results})}})
  },
  ISTJ: (req, res) => {
    res.render("results/ISTJ")
  },
  ISTJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ISTJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ISTJfriends", {data: results})}})
  },
  ISFP: (req, res) => {
    res.render("results/ISFP")
  },
  ISFPfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ISFP';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ISFPfriends", {data: results})}})
  },
  ISFJ: (req, res) => {
    res.render("results/ISFJ")
  },
  ISFJfriends: (req, res) => {
    db.query("SELECT * FROM users WHERE mbti = 'ISFJ';", function (err, results) {
      if (err) {res.send(err)
      }else{res.render("friends/ISFJfriends", {data: results})}})
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  signup: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signup();
    return res.json(response);
  },
  results: async (req, res) => {
    const user = new User(req.body);
    const response = await user.results();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};