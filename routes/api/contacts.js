const express = require("express");
const controller = require("../../controllers/contacts");
const { validateBody, isValidID } = require("../../middlewars");
const { schema } = require("../../helpers");

const router = express.Router();

router.get("/", controller.getAllContacts);

router.get("/:contactId", isValidID, controller.getContactByID);

router.post("/", validateBody(schema.addSchema), controller.addContact);

router.delete("/:contactId", isValidID, controller.deleteContactByID);

router.put(
  "/:contactId",
  isValidID,
  validateBody(schema.addSchema),
  controller.updateContactByID
);

router.patch(
  "/:contactId/favorite",
  isValidID,
  validateBody(schema.favoriteSchema),
  controller.updateStatusContact
);

module.exports = router;