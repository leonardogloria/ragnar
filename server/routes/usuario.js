module.exports = app =>{
    var Usuario = app.models.usuario;
    app.route("/usuario")

        .get((req,res)=>{
            Usuario.find({})
            .then(usuarios =>{
                res.status(200).json(usuarios)
            })
            
        })
        .post((req,res)=>{
            
            Usuario.create(req.body)
            .catch(erro =>{
                res.status(500).json(erro)
           })     
            .then((aluno) =>{
                    res.status(201).json(usuario);
                });

        });

    app.route("/usuario/:id")
    .get((req,res) =>{
        Usuario.findById(req.params.id)
        .then(usuario =>{
            res.status(200).json(usuario)
        })
    });
            
}


                