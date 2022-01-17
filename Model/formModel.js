import mongoose from "mongoose";

const formSchema = mongoose.Schema(
  {
    title: { type: String, default: "Untitled form" },
    formName: { type: String, default: "UnNamed form" },
    QuesANS: [
      {
        id : {type :String, default : new Date()},
        Question: String,
        AnswerType: String,
        AnswerList: [
          // {
          //   Answer: String,
          // },
        ],
      },
    ],
    description: String,
  },
  {
    timestamps: true,
  }
);

const FormModel = mongoose.model("FormData", formSchema);
export { FormModel };
