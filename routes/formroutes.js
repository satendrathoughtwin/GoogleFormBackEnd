import express from "express";
import {
  createForm,
  deleteFormById,
  deleteQuestionById,
  editFormById,
  getForm,
  getFormDataInDecendingOrder,
  getFormElementById,
  updateExistingQuestionById,
} from "../Controller/formController.js";
const router = express.Router();
router.post("/form", createForm);
router.get("/form", getForm);
router.get("/formdece", getFormDataInDecendingOrder);
router.get("/form/:id", getFormElementById);
router.delete("/form/:id", deleteFormById);
router.patch("/form/:id", editFormById);
router.delete("/form/:id/:arreleid", deleteQuestionById);
router.patch("/form/:id/:arreleid", updateExistingQuestionById);
export default router;
