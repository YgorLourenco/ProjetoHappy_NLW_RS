// Chamar o banco de dados
const Database = require('sqlite-async')



function execute(db) {
    // executar o banco de dados criando um bando de dados se não existir
    // ter um identificador que vai sendo incrementado com o tempo
    // Ir colocando as coluna que irão vir junto com o identificador
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT, 
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );

    `) 
}

// Pedir para o banco de dados abrir o diretório 
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)