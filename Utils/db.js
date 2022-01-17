import  Mongoose from "mongoose";
const connectDb = async(req,res)=>{
    try{
        const conn = await  Mongoose.connect("mongodb://localhost/GoogleForm",{
            useUnifiedTopology : true,
            useNewUrlParser :true
        })
        if(conn)
        {
            console.log(`database connection successfull`)
        }
    }
    catch(err){
        console.log(`Error :`, err.message)
    }
}

export default connectDb