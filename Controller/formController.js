import { FormModel } from "../Model/formModel.js";
import chalk from "chalk";
const createForm = async (req, res) => {
  const { title, description, formName, QuesANS, id } = req.body;
  console.log(QuesANS);
  const formData = FormModel({
    title,
    description,
    QuesANS,
    formName,
    id: id || new Date() + Math.random(),
  });
  try {
    const result = await formData.save();
    if (result) {
      console.log(chalk.green.inverse("data save successfully"));
      res.status(201).json({
        Success: `data save successfully`,
        length: result.length,
        data: result,
      });
    }
  } catch (err) {
    console.log(chalk.redBright("data save not successfully", err.message));
  }
};

const getForm = async (req, res) => {
  try {
    const result = await FormModel.find();
    if (result) {
      console.log(chalk.green.inverse("data find successfully"));
      res.json({
        Success: `data find successfully`,
        length: result.length,
        data: result,
      });
    }
  } catch (err) {
    console.log(chalk.redBright("data find not successfully :", err.message));
  }
};


const getFormDataInDecendingOrder = async (req, res) => {
  try {
    const result = await FormModel.find().sort({createdAt:-1});
    if (result) {
      console.log(chalk.green.inverse("data find successfully in decending order"));
      res.json({
        Success: `data find successfully  in decending order`,
        length: 1,
        data: result[0]
      });
    }
  } catch (err) {
    console.log(chalk.redBright("data find not successfully in decending order:", err.message));
  }
};
const deleteQuestionById = async (req, res) => {
  const _id = req.params.id;
  const arreleid = req.params.arreleid;
  console.log(_id);
  try {
    const result = await FormModel.updateOne(
      {
        _id: req.params.id,
      },
      { $pull: { QuesANS: { id: arreleid } } },
      { multi: true }
    );
    if (result) {
      res.json({ request: "Deleted", length: result.length, data: result });
    }
  } catch (error) {
    res.json(error);
  }
};

const getFormElementById = async (req, res) => {
  try {
    const result = await FormModel.find({ _id: req.params.id });
    if (result) {
      console.log(chalk.green.inverse("data find successfully By Id"));
      res.json({
        Success: `data find successfully By Id`,
        length: result.length,
        data: result,
      });
    }
  } catch (err) {
    console.log(
      chalk.redBright("data find not successfully By Id:", err.message)
    );
  }
};

const editFormById = async (req, res) => {
  const { title, description, formName, QuesANS, id } = req.body;
  try{
    const result = await FormModel.findByIdAndUpdate({_id : req.params.id},{title, description, formName})
  } catch(err){
    console.log(`title, description, formName,`,err.message)
  }
  console.log(title, description, formName, QuesANS, id )
  try {
    const result = await FormModel.updateOne(
      {
        _id: req.params.id,
      },
      { $push: { QuesANS: QuesANS} },
      // { $push: { QuesANS: req.body} },
      { multi: true }
    );

    
    if (result) {
      console.log(chalk.green.inverse("form updated successfully By Id"));
      res.json({
        Success: `Form Update Successfully`,
        length: result.length,
        data: result,
      });
    }
  } catch (err) {
    console.log(
      chalk.redBright("form updated not successfully By Id:", err.message)
    );
    res.json({
      UnSuccess: `Form didn't Update  Successfully`,
      data: [],
      Error : err.message
    });
  }
};
export { createForm, getForm, deleteQuestionById, getFormElementById,editFormById,
  getFormDataInDecendingOrder };
