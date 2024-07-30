const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const app = express();
app.use(bodyParser.json());

const XLSX_FILE_PATH = path.join("A:\\APP_DEVELOPMENT\\project1\\src\\Components\\Validation", 'contact_data.xlsx');

app.post('/contact', (req, res) => {
  const { name, comments, feedback } = req.body;

  // Create a new workbook or read existing one
  let workbook;
  if (fs.existsSync(XLSX_FILE_PATH)) {
    workbook = xlsx.readFile(XLSX_FILE_PATH);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Get or create the worksheet
  let worksheet;
  const sheetName = 'ContactData';
  if (workbook.SheetNames.includes(sheetName)) {
    worksheet = workbook.Sheets[sheetName];
  } else {
    worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Comments', 'Feedback']]);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  // Add new data
  const newRow = [name, comments, feedback];
  xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  // Save the workbook
  xlsx.writeFile(workbook, XLSX_FILE_PATH);

  res.status(200).send('Data saved successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
