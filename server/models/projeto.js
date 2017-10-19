import mongoose from "mongoose";
module.exports = () => {
    var schema = mongoose.Schema({
        titulo:{
            type: String,
            required:true
        }
        ,descricao:{type:String}
        ,dataInicio:{type: Date}
        ,dataFim:{type:Date}
        ,responsaveis:[]
        ,equipe:[]
    });
    return mongoose.model("Projeto",schema);
}