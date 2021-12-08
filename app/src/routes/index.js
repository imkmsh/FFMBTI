const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get('/', ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/signup", ctrl.output.signup);
router.get("/test", ctrl.output.test);
router.get("/results", ctrl.output.results);

router.get("/ENTP", ctrl.output.ENTP)
router.get("/ENTPfriends", ctrl.output.ENTPfriends);
router.get("/ENTJ", ctrl.output.ENTJ)
router.get("/ENTJfriends", ctrl.output.ENTJfriends);
router.get("/ENFP", ctrl.output.ENFP)
router.get("/ENFPfriends", ctrl.output.ENFPfriends);
router.get("/ENFJ", ctrl.output.ENFJ)
router.get("/ENFJfriends", ctrl.output.ENFJfriends);
router.get("/ESTP", ctrl.output.ESTP)
router.get("/ESTPfriends", ctrl.output.ESTPfriends);
router.get("/ESTJ", ctrl.output.ESTJ)
router.get("/ESTJfriends", ctrl.output.ESTJfriends);
router.get("/ESFP", ctrl.output.ESFP)
router.get("/ESFPfriends", ctrl.output.ESFPfriends);
router.get("/ESFJ", ctrl.output.ESFJ)
router.get("/ESFJfriends", ctrl.output.ESFJfriends);
router.get("/INTP", ctrl.output.INTP)
router.get("/INTPfriends", ctrl.output.INTPfriends);
router.get("/INTJ", ctrl.output.INTJ)
router.get("/INTJfriends", ctrl.output.INTJfriends);
router.get("/INFP", ctrl.output.INFP)
router.get("/INFPfriends", ctrl.output.INFPfriends);
router.get("/INFJ", ctrl.output.INFJ)
router.get("/INFJfriends", ctrl.output.INFJfriends);
router.get("/ISTP", ctrl.output.ISTP)
router.get("/ISTPfriends", ctrl.output.ISTPfriends);
router.get("/ISTJ", ctrl.output.ISTJ)
router.get("/ISTJfriends", ctrl.output.ISTJfriends);
router.get("/ISFP", ctrl.output.ISFP)
router.get("/ISFPfriends", ctrl.output.ISFPfriends);
router.get("/ISFJ", ctrl.output.ISFJ)
router.get("/ISFJfriends", ctrl.output.ISFJfriends);

router.post("/login", ctrl.process.login);
router.post("/signup", ctrl.process.signup);
router.post("/friends", ctrl.process.results);


module.exports = router;
