import connect  from "../../config/database";
import UserComment from "../../models/userComment";
export default async function(req, res, next) {
    await connect();
    try {
        const newUserComment = new UserComment({
            email: req.body.email,
            name: req.body.name,
            comment:req.body.comment,
        })
        await newUserComment.save()
    }
    catch(err){
        console.log(err);
    }
    
}