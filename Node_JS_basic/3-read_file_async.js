const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
  /* we can wrap async work in a Promise so we can signal when it finishes.
   resolve() means it succeeded, reject() means it failed, and the caller
   can wait for that outcome using await or .then()/.catch(). */
    fs.readFile(path, 'utf8', (err, students) => {
    // path = csv file, utf8 = interpret as text
    // (err, data) a callback defining params to signal completion
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const studentLines = students.split(/\r?\n/).filter(Boolean); // returns an array of lines
      studentLines.shift(); // removes header
      const studentQty = studentLines.length;
      /* separates lines based on /windows newline or newline/
      .filter(Boolean) ensures only lines with content are included
      .length to find number of lines */

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

      const output = 
      `Number of students: ${studentQty}\n` +
      `Number of students in CS: ${numCS}. List: ${listCS}\n` +
      `Number of students in SWE: ${numSWE}. List: ${listSWE}\n`;

      resolve(output);
    });
  });
}

module.exports = countStudents;
