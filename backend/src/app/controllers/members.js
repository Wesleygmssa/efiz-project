const fs = require('fs') // = > função para inserir os dados
const data = require("../../../data.json")// => dados salvos no banco


//post
exports.post = function (req, res) {
    //req.query
    //req.body

    const keys = Object.keys(req.body)// pegando as chaves do objeto e transformando em array

    for (key of keys) {// validação antes de enviar para banco de dados
        if (req.body[key] == '') {
            return res.send('Please, fill all fields!')
        }
    }
    
    let { name, email } = req.body

    const id = Number(data.members.length + 1)

    data.members.push({
       id,
       name,
       email
    })

   
   //para increver no json
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error!")

        return res.redirect("/")
    } )

    

    // return res.send(req.body)
}
    

   