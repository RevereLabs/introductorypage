import connect  from "../../config/database";
import UserComment from "../../models/userComment";

export default async function(req, res, next) {
    console.log('poop')
    await connect();
    const userComments = await UserComment.find({})
    console.log('poop')
    res.json(userComments)
    
}
