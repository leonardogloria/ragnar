import mongoose from 'mongoose';
module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true,
            index:{
                unique:true
            }
        }
    });
    return mongoose.model("Usuario",schema);
}