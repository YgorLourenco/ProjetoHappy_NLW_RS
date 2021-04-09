const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

// async sicroniza o banco de dados e coloca o DB em espera com a função await
Database.then(async db => {
    // inserir dados na tabela
   await saveOrphanage(db, {
       lat: "-27.222633",
       lng: "-49.6555874",
       name: "Lar dos meninos",
       about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
       whatsapp: "98989897898",
        images: [
           "https://images.unsplash.com/photo-1612350496037-58b6810a60fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2MTA2OTM1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

           "https://images.unsplash.com/photo-1612350496037-58b6810a60fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2MTA2OTM1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
       ].toString(),
       instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
       opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
   }) 

    // consultar dados na tabela
    // .all pega todos os dados do banco dados
    // SELETC * pega todos os campos da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // Consultar somente 1 orfanato, pelo id
    // Selecionar todos os dados do orphanages pelo id 1
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // //Deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})