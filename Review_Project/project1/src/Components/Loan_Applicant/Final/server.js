const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // To allow requests from different origins

const app = express();
const PORT = 3006;

app.use(cors());
app.use(bodyParser.json());

let loanData = [
  { id: '1', firstName: 'John', lastName: 'Doe', status: 'NULL' },
  { id: '2', firstName: 'Jane', lastName: 'Doe', status: 'NULL' }
];

app.get('/get-loan-data', (req, res) => {
  res.json(loanData);
});

app.post('/update-loan-status', (req, res) => {
  const { id, status } = req.body;
  const loan = loanData.find(loan => loan.id === id);
  if (loan) {
    loan.status = status;
    res.status(200).send('Status updated');
  } else {
    res.status(404).send('Loan not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
