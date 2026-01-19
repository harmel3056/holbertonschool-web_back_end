const fs = require('fs'); // pulls fileSync module

function countStudents(path) {
  try {
    const students = fs.readFileSync(path, 'utf8'); // attempts to read file

    const studentLines = students.split(/\r?\n/).filter(Boolean); // returns an array of lines
    const studentQty = studentLines.length - 1;
    /* separates lines based on /windows newline or newline/
    .filter(Boolean) ensures only lines with content are included
    .length to find number of lines, -1 to account for the title line */

    const studentsCS = [];
    for (const line of studentLines) { // currently in string form
      const student = line.split(','); // breaks string into columns/array
      if (student[3] === 'CS') { // targets FIELD column
        studentsCS.push(student[0]); // adds applicable student names to studentsCS
      }
    }
    const numCS = studentsCS.length; // counts number of students in the list
    const listCS = studentsCS.join(', '); // normalise array to a string for checker output

    const studentsSWE = [];
    for (const line of studentLines) {
      const student = line.split(',');
      if (student[3] === 'SWE') {
        studentsSWE.push(student[0]);
      }
    }
    const numSWE = studentsSWE.length;
    const listSWE = studentsSWE.join(', ');

    console.log(`Number of students: ${studentQty}`);
    console.log(`Number of students in ${studentsCS[3]}: ${numCS}. List: ${listCS}`);
    console.log(`Number of students in ${studentsSWE[3]}: ${numSWE}. List: ${listSWE}`);
  } catch (err) { // handle errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
