module.exports = app =>{
    var Aluno = app.models.aluno;
    app.route("/aluno")

        .get((req,res)=>{
            Aluno.find({})
            .then(alunos =>{
                res.status(200).json(alunos)
            })
            
        })
        .post((req,res)=>{
            
            Aluno.create(req.body)
            .catch(erro =>{
                res.status(500).json(erro)
           })     
            .then((aluno) =>{
                    res.status(201).json(aluno);
                });

        });

    app.route("/aluno/:id")
    .get((req,res) =>{
        Aluno.findById(req.params.id)
        .then(aluno =>{
            res.status(200).json(aluno)
        })
    })
            
}


                