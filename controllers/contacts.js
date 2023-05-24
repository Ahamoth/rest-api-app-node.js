const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id ${contactId} does not exist`);
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deleteContactByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id ${contactId} does not exist`);
  }
  res.json({ message: "Delete success" });
};

const updateContactByID = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with id ${contactId} does not exist`);
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with id ${contactId} does not exist`);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactByID: ctrlWrapper(getContactByID),
  addContact: ctrlWrapper(addContact),
  deleteContactByID: ctrlWrapper(deleteContactByID),
  updateContactByID: ctrlWrapper(updateContactByID),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};