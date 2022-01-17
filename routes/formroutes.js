import express from 'express';
import {createForm, deleteQuestionById, editFormById, getForm, getFormDataInDecendingOrder, getFormElementById }from '../Controller/formController.js';
const router = express.Router();
router.post("/form",createForm)
router.get("/form",getForm)
router.get("/formdece",getFormDataInDecendingOrder)
router.get("/form/:id",getFormElementById)
router.patch("/form/:id",editFormById)
router.delete("/form/:id/:arreleid",deleteQuestionById)
export default router
    