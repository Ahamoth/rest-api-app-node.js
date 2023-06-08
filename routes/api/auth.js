const express = require("express");
const { validateBody, isValidToken } = require("../../middlewars");
const { schemas } = require("../../models/user");
const controller = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controller.register
);

router.post("/login", validateBody(schemas.loginSchema), controller.login);

router.get("/current", isValidToken, controller.getCurrent);

router.post("/logout", isValidToken, controller.logout);

module.exports = router;