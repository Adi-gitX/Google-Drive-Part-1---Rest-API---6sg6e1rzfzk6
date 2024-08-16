import fs from 'fs';

const deleteAFile = (fileName) => {
  const filePath = `./root/${fileName}`;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return { message: 'File deleted successfully' };
  } else {
    return { message: 'File does not exist' };
  }
};

export default deleteAFile;
