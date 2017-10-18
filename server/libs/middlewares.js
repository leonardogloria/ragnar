import bodyParser from "body-parser";
module.exports = app => {
    app.set('port',3000);
    app.use(bodyParser.json())
    app.set("json spaces",4);
    app.set("mongoose-url","mongodb://192.168.99.100:27017")
    app.use((req,res,next) =>{
        delete req.body._id;
        next();
    })
};