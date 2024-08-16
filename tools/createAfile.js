import fs from 'fs';

const createAfile = (fileName, fileData) => {
  const filePath = `./root/${fileName}`;
  fs.writeFileSync(filePath, fileData);
  return { message: 'File created successfully' };
};

export default createAfile;
