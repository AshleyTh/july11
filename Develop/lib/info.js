const fs = require('fs')
const path = require('path')


const findByID = (id, noteArray) => {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}

