const mysql = require('mysql2');

const notesDb = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes_db'
  },
  console.log('Connected to notes_db database.')
);

const getNotes = (res) => {

    notesDb.query('SELECT * FROM notes', function (err, response) {
        if (err) throw new Error;
        res.json(response);
    });

};
const postNotes = (res, title, text) => {

    // Add new data
    notesDb.query(`INSERT INTO notes (title, text) VALUES ("${title}", "${text}")`, function (err, response) {
        if (err) throw new Error;
        console.log('Added 1 new line to notes table in notes_bd database.');

        // Return new values
        notesDb.query('SELECT * FROM notes', function (err, response) {
            if (err) throw new Error;
            res.status(201).json(response);
        });
    });

};
const deleteNotes = (res, id) => {

    // Remove item from database
    notesDb.query(`DELETE FROM notes WHERE id = ${id};`, function (err, response) {
        if (err) throw new Error;

        // Return response
        console.log(`Deleted 1 line from notes table in notes_bd database.`)
        res.status(201).json({ deleted: true })
    });

}

module.exports = {
    getNotes,
    postNotes,
    deleteNotes
}