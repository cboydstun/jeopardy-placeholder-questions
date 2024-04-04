const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const { placeholderQuestions } = require('./placeholder-questions');

// Middleware
app.use(cors());

// GET - /api/health - returns OK if the server is running
app.get('/api/health', (req, res) => {
    res.send('OK');
});

// GET - /api/questions - returns all questions
app.get('/api/questions', (req, res) => {
    res.send(placeholderQuestions);
});

// GET - /api/questions? - returns questions by category using query params
app.get('/api/questionsByCategory', (req, res) => {
    const { category } = req.query; // Extract the category query parameter from the request

    // If a category query parameter is provided, filter questions by category
    if (category) {
        const filteredQuestions = placeholderQuestions.filter(question => question.category.toLowerCase() === category.toLowerCase());
        res.json(filteredQuestions);
    } else {
        // If no category is provided, return all questions
        res.json(placeholderQuestions);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});