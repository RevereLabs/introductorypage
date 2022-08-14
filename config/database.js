import  Mongoose  from "mongoose";

const connect=()=>{
    Mongoose.connect('mongodb+srv://Vishnu:ucvnr0021b@cluster0.ercrf.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>
        {
            err?console.log('error connecting to mongodb'):console.log('connected to mongodb');
        }
    );
};

export default connect;