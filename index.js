import express from 'express';
import createAfile from './tools/createAfile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFileName.js';
import updateAfile from './tools/updateAfile.js';
import deleteAFile from './tools/deleteAFile.js';

const app = express();
const port = 8000;

app.use(express.json());

// Retrieve a list of all file names
app.get('/file', (req, res) => {
  const result = getAllFiles('./root');
  res.json(result);
});

// Retrieve the content of a specified file
app.get('/file/:fileName', (req, res) => {
  const { fileName } = req.params;
  const result = getAFile(fileName);
  res.json(result);
});

// Create a new file
app.post('/file/create', (req, res) => {
  const { fileName, fileData } = req.body;
  if (!fileName || fileData === undefined) {
    return res.status(400).json({ message: 'Invalid request body' });
  }
  const result = createAfile(fileName, fileData);
  res.json(result);
});

// Update an existing file with new content
app.put('/file/:fileName', (req, res) => {
  const { fileName } = req.params;
  const { newFileData } = req.body;
  if (newFileData === undefined) {
    return res.status(400).json({ message: 'Invalid request body' });
  }
  const result = updateAfile(fileName, newFileData);
  res.json(result);
});
app.delete('/file/:fileName', (req, res) => {
  const { fileName } = req.params;
  const result = deleteAFile(fileName);
  res.json(result);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
