module.exports = app =>{
    const Projeto = app.models.projeto;
    app.route("/projeto")
        .post((req,res) =>{
            Projeto.create(req.body)
                .catch(erro =>{
                    res.json(500).json({status:"Erro Interno"});
                })
                .then(projeto =>{
                    res.status(200).json(projeto);
                });
        })
        .get((req,res) =>{
            Projeto.find({})
            .catch(erro =>{
                res.status(500).json({status:"Ops, algo de errado aconteceu"})
            })
            .then(projetos =>{
                res.status(200).json(projetos);
            })
        });

    app.route("/projeto/:id")
        .get((req,res) =>{
            const projetoId = req.params.id
            Projeto.findById(projetoId)
            .then(projeto =>{
                res.status(201).json(projeto);
            })
        })
        .put((req,res) =>{
            Projeto.findOneAndUpdate({_id:req.params.id}, req.body)
            .then(result => res.sendStatus(204))
            .catch(error =>{
                res.status(412).json({msg: error.message})
            });
        })

}