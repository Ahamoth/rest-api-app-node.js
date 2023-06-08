const express = require("express");
const controller = require("../../controllers/contacts");
const { validateBody, isValidID, isValidToken } = require("../../middlewars");
const { schema } = require("../../helpers");

const router = express.Router();

router.get("/", isValidToken, controller.getAllContacts);

router.get("/:contactId", isValidToken, isValidID, controller.getContactByID);

router.post(
  "/",
  isValidToken,
  validateBody(schema.addSchema),
  controller.addContact
);

router.delete(
  "/:contactId",
  isValidToken,
  isValidID,
  controller.deleteContactByID
);

router.put(
  "/:contactId",
  isValidToken,
  isValidID,
  validateBody(schema.addSchema),
  controller.updateContactByID
);

router.patch(
  "/:contactId/favorite",
  isValidToken,
  isValidID,
  validateBody(schema.favoriteSchema),
  controller.updateStatusContact
);

module.exports = router;