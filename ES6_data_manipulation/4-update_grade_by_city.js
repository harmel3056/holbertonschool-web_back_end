export default function updateStudentGradeByCity(students, city, grades) { // outer function
  return students.filter((student) => student.location === city) // filters each student by locations that match city entered
    .map((student) => { // .map takes singular student
      const gradeVar = grades.find((grade) => grade.studentId === student.id); 
      // finds where student id on grades array matches student id on students array

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (gradeVar && gradeVar.grade) || 'N/A', //returns gradeVar.grade if it exists, else N/A
        /* With the above section, if we check for gradeVar.grade alone the system assumes that gradeVar definitely
        exists, so if gradeVar.grade doesn't exist an error will return. A check on gradeVar that returns false or
        undefined stops the expression and returns gradeVar itself, so it prevents an error return.*/
      }; // INNER return of one value to .map for EACH student returned by .filter
    }); // return from OUTER function, only runs ONCE
}

/* So, we only want to produce results for students of 'city', therefore we create an outer function which
does that, but within it we still need to ensure that the grades are matched via the DBs studen IDs,
and also return those details in the required format. */
