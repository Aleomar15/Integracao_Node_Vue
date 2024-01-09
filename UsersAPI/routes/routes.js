var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
var AdminAuth = require("../middleware/AdminAuth");//variavel de autorização, deve colocar um uma rota para funcionar

router.get('/', HomeController.index);
router.post('/user', UserController.create);//serve para enviar informações para o banco
router.get("/user",AdminAuth, UserController.index);//vai retornar todos os usuarios
router.get("/user/:id",UserController.findUser);// buscar pelo id
router.put("/user",UserController.edit);// rota de edição
router.delete("/user/:id", AdminAuth, UserController.remove);// Rota de deletar usuario
router.post("/recoverpassword", UserController.recoverPassword);// token recuperar senha
router.post("/changepassword",UserController.changePassword);//rota para trocar a senha
router.post("/login",UserController.login);
router.post("/validate",AdminAuth,HomeController.validate);

module.exports = router;