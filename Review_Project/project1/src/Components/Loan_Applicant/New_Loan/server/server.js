const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid'); // For generating unique IDs

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-loan', async (req, res) => {
  const formData = req.body;

  // Generate a unique file name using UUID
  const uniqueFileName = `Loan_Application_${formData.id}.xlsx`;
  const filePath = path.join(__dirname, uniqueFileName);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Loan Application');

  // Define columns
  sheet.columns = [
    { header: 'ID', key: 'id', width: 36 }, // Added ID column
    { header: 'First Name', key: 'firstName', width: 20 },
    { header: 'Last Name', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Gender', key: 'gender', width: 10 },
    { header: 'Need Loan', key: 'needLoan', width: 10 },
    { header: 'Purpose', key: 'purpose', width: 30 },
    { header: 'Loan Amount', key: 'loanAmount', width: 15 },
    { header: 'Interest Rate', key: 'interestRate', width: 20 },
    { header: 'Communication Address', key: 'commAddress', width: 30 },
    { header: 'Permanent Address', key: 'permAddress', width: 30 },
    { header: 'Processing Charge', key: 'processingCharge', width: 20 },
    { header: 'Comments', key: 'comments', width: 30 }
  ];

  // Append the new row to the worksheet
  sheet.addRow({
    id: formData.id, // Include the unique ID
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    gender: formData.gender,
    needLoan: formData.needLoan,
    purpose: formData.purpose,
    loanAmount: formData.loanAmount,
    interestRate: formData.interestRate,
    commAddress: formData.commAddress,
    permAddress: formData.permAddress,
    processingCharge: formData.processingCharge,
    comments: formData.comments
  });

  // Save the updated workbook to the unique file
  try {
    console.log(`Saving file to ${filePath}`);
    await workbook.xlsx.writeFile(filePath);
    console.log('File created successfully');
    res.send(`Data saved to ${uniqueFileName}`);
  } catch (error) {
    console.error('Error saving file:', error);
    res.status(500).send('Error saving data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
