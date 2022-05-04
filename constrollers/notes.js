const { getNotes, postNotes, deleteNotes } = require('../db/mysql_helper')

const renderHandler = (req, res) => {
    getNotes(res);
};
const addNoteHandler = (req, res) => {
    const { title, text } = req.body;
    postNotes(res, title, text);
};
const removeNoteHandler = (req, res) => {
    const { id } = req.params;
    deleteNotes(res, id);
};

module.exports = {
    renderHandler,
    addNoteHandler,
    removeNoteHandler
}

