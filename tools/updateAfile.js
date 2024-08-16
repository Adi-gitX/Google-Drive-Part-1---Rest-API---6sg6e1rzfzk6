import fs from 'fs';

const updateAfile = (fileName, newFileData) => {
  const filePath = `./root/${fileName}`;
  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, newFileData);
    return { message: 'File updated successfully' };
  } else {
    return { message: 'File does not exist' };
  }
};

export default updateAfile;
