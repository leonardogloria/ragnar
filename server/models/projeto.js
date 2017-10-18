import mongoose from "mongoose";
module.exports = () => {
    var schema = mongoose.Schema({
        titulo:{
            type: String,
            required:true
        },
        descricao:{
            type:String
        }
    });
    return mongoose.model("Projeto",schema);
}