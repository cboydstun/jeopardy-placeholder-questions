const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { placeholderQuestions } = require('./placeholder-questions');

app.get('/api/health', (req, res) => {
    res.send('OK');
});

app.get('/api/questions', (req, res) => {
    res.send(placeholderQuestions);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});