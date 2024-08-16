import fs from 'fs';

const getAFile = (fileName) => {
  const filePath = `./root/${fileName}`;
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return { fileContent };
  } else {
    return { message: 'File does not exist' };
  }
};

export default getAFile;
