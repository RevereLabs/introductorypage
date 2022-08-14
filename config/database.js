import  Mongoose  from "mongoose";

const connect=()=>{
    Mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>
        {
            err?console.log('error connecting to mongodb'):console.log('connected to mongodb');
        }
    );
};

export default connect;