const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid'); // For generating unique IDs

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to save loan application data
app.post('/submit-loan', async (req, res) => {
  const formData = req.body;

  // Generate a unique file name using UUID
  const uniqueFileName = `Loan_Application_${uuid.v4()}.xlsx`;
  const filePath = path.join(__dirname, uniqueFileName);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Loan Application');

  // Define columns
  sheet.columns = [
    { header: 'Unique ID', key: 'uniqueId', width: 36 },
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
    uniqueId: uuid.v4(),
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

// Endpoint to check if a loan application exists based on email
app.post('/check-loan', async (req, res) => {
  const { email } = req.body;

  // Read all files in the directory and check for the email
  const files = fs.readdirSync(__dirname);
  const matchedData = [];

  for (const file of files) {
    if (file.endsWith('.xlsx')) {
      const workbook = new ExcelJS.Workbook();
      try {
        await workbook.xlsx.readFile(path.join(__dirname, file));
        const sheet = workbook.getWorksheet('Loan Application');

        sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
          if (row.getCell('email').value === email) {
            matchedData.push(row.values);
          }
        });
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  }

  if (matchedData.length > 0) {
    res.json({ status: 'success', data: matchedData });
  } else {
    res.json({ status: 'not found', message: 'No data found for the provided email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
