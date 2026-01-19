const { readFile } = require('node:fs/promises');

async function countStudents(path) {
  try {
    fs.readFile(path, 'utf8'), (err, data) => {
    if (err) {
      throw new Error('Cannot load the database')
    }
  }

  }
}

module.exports = countStudents;