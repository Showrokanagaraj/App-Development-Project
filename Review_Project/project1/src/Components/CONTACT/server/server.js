const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const cors = require('cors');
const path = require('path');
const glob = require('glob');
const uuid = require('uuid'); // For generating unique IDs

const app = express();
const port = 3008;

app.use(cors());
app.use(bodyParser.json());

// Handler for the new contact form
app.post('/submit-contact', async (req, res) => {
  const formData = req.body;

  // Generate a unique file name using UUID
  const uniqueFileName = `Contact_Application_${formData.id}.xlsx`;
  const filePath = path.join(__dirname, uniqueFileName);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Contact Application');

  // Define columns
  sheet.columns = [
    { header: 'ID', key: 'id', width: 36 },
    { header: 'First Name', key: 'firstName', width: 20 },
    { header: 'Last Name', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Gender', key: 'gender', width: 10 },
    { header: 'Need Loan', key: 'needLoan', width: 10 },
    { header: 'Comments', key: 'comments', width: 30 }
  ];

  // Append the new row to the worksheet
  sheet.addRow({
    id: formData.id,
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    gender: formData.gender,
    needLoan: formData.needLoan,
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

// Endpoint to fetch all contact requests
app.get('/get-contact-data', async (req, res) => {
  try {
    const files = glob.sync(path.join(__dirname, 'Contact_Application_*.xlsx'));
    const allData = [];

    for (const file of files) {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(file);
      const worksheet = workbook.getWorksheet('Contact Application');
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // Skip header row
          const rowData = {};
          worksheet.columns.forEach((column, colNumber) => {
            rowData[column.key] = row.getCell(colNumber + 1).value;
          });
          allData.push(rowData);
        }
      });
    }

    res.json(allData);
  } catch (error) {
    console.error('Error reading contact data:', error);
    res.status(500).send('Error reading contact data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
