const db = require('../database/db')
const informacoesPartidas = require('../models/informacoes')

const Informacoes = db.Mongoose.model('Partidas', informacoesPartidas.Partidas, 'informacoes')

exports.getRaiz = ("/", (req, res) => {
    res.send('<i>Node with MongoDB</i>')
})


exports.incluir = ('/incluirpartida',async (req, res) => {
    let grupo = req.query.grupo
    let data = req.query.data
    let hora = req.query.hora
    let time = req.query.time
    let adversario = req.query.adversario

    let partidas = new Informacoes({grupo, data, hora, time, adversario})
    
    try {
        await partidas.save()
        res.json(partidas)
    }
    catch(err) {
        next(err)
    }
})

exports.mostrar = ("/mostrarpartidas", async(req, res) => {

    await Informacoes.find({}).lean().exec(function(e,listaPartidas) {
        res.json(listaPartidas)
        res.end()
    }) 
})

exports.mostrargrupo = ("/mostrargrupo", async(req, res) => {
    let grupo = req.query.grupo
    let partidas = await Informacoes.findOne({grupo:grupo})

    if (partidas == null)
    {
        res.send("O grupo digitado não existe")
    }
    else
    {
        await Informacoes.find({grupo: grupo}).lean().exec(function(e, listaPartidas)
        {
            res.json(listaPartidas);
            res.end();
        })
    }

})

exports.mostrarjogo = ("/mostrarjogo", async(req, res) => {
    let time = req.query.time
    let adversario = req.query.adversario
    
    if (time && adversario)
    {
        await Informacoes.find({time: time, adversario: adversario}).lean().exec(function(e, listaPartidas)
        {
            res.json(listaPartidas);
        })
    }
    else if (time) {
        await Informacoes.find({time: time}).lean().exec(function(e, listaPartidas)
        {
            res.json(listaPartidas);
            res.end();
        })
    }
    else if (adversario)
    {
        await Informacoes.find({adversario: adversario}).lean().exec(function(e, listaPartidas)
        {
            res.json(listaPartidas);
            res.end();
        })
    }
    else
    {
        res.send("Os valores digitados não existem")
    }

})

exports.mostrardata = ("/mostrardata", async(req, res) => {
    let data = req.query.data
    let partidas = await Informacoes.findOne({data:data})

    if (partidas)
    {
        await Informacoes.find({data: data}).lean().exec(function(e, listaPartidas)
        {   
            res.json(listaPartidas);
            res.end();
        })
    }
    else
    {
        res.send("Não houve jogo na data digitada")
    }
})
