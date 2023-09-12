import express from 'express';
import bodyParser from 'body-parser';
import * as math from 'mathjs';
const app = express();
export default app;

const PORT = process.env.PORT || 3000;

// Array to store calculation history
const history = [];

// Middleware
app.use(bodyParser.json());

// Calculator endpoint
app.get('/calculus', (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: true, message: 'Query parameter is required.' });
  }

  try {
    const result = math.evaluate(query);
    const calculation = { query, result };

    // Add the calculation to history
    history.push(calculation);
    if (history.length > 5) {
      // Remove the first i-e oldest calculation if history exceeds 5 entries
      history.shift();
    }

    res.status(200).json({ error: false, result });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

// History endpoint
app.get('/calculus/history', (req, res) => {
  res.status(200).json(history);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
