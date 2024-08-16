import fs from 'fs';

const getAllFiles = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    return { files };
  } else {
    return { message: 'Directory does not exist' };
  }
};

export default getAllFiles;
