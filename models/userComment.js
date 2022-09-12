import { Schema, model,models } from 'mongoose';

const UserCommentSchema= Schema({
    name:String,
    email:String,
    comment:String,
});

let UserComment;

try {
    UserComment = model("UserComment");
} catch (err) {
    UserComment = model("UserComment", UserCommentSchema);
}

export default UserComment;