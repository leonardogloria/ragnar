module.exports = app =>{
    app.listen(app.get("port"),() =>{
         console.log(`Ragnar is still Alive on PORT: ${app.get("port")}`)
    });
}