//Não existe mais fakedata
//const orphanages = require("./database/fakedata.js");
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage')
module.exports = {

    index(req, res) {
        return res.render('index')
    },
    async orphanage(req, res) {
        // Vai procurar o id
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]
            //Split vai quebrar o texto em um array
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0") {
                orphanage.open_on_weekends = false
            } else{
                orphanage.open_on_weekends = true
            }

            // Transformo o "{orphanage}" que serve de template engine em array 
            return res.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },
    async orphanages(req, res) {
        // No try ele vai tentar um algoritmo, enquanto no catch(error) vai enviar uma mensagem de erro
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        // colocar o orphanage pelo banco
        
    },
    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },
    async saveOrphanage(req, res) {
        const fields = req.body

        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        } 
        // else {
        //     alert('Todos os campos preenchidos com sucesso!')
        // }

        try {
            // salvar um orfanato
            const db = await Database
            await saveOrphanage(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,
        }) 
            // redirecionamento
            return res.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados!")
        }  
    }
}