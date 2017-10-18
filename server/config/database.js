import mongoose from 'mongoose';
module.exports = app => {
    const uri = app.get('mongoose-url');
    mongoose.set('debug',true);
    mongoose.connect(uri);
    mongoose.connection.on('connected', () => {
        console.log(`Mongoose! Conectado em ${uri}`);
    });
     mongoose.connection.on('disconnected', () => {
        console.log(`Mongoose! Desconectado de ${uri}`);
    });
     mongoose.connection.on('error', erro => {
        console.log(`Mongoose! Erro na conexao: ${erro}`);
    });
    process.on('SIGINT',() =>{
        mongoose.connection.close(() => {
            console.log(`Mongoose! Desconectado pelo término da app`);
            process.exit(0);
        });
    })

}