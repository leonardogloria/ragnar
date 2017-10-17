module.exports = app =>{
    app.get("/",(req,res) => res.status(201).json({status:"Ragnar is stil alive"}));
}