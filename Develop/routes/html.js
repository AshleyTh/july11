const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirtname, "../develop/public/notes.html"));
})