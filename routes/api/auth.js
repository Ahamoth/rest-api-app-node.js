const express = require("express");
const { validateBody, isValidToken, upload } = require("../../middlewars");
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

router.patch(
  "/avatar",
  isValidToken,
  upload.single("avatar"),
  controller.updateAvatar
);

module.exports = router;