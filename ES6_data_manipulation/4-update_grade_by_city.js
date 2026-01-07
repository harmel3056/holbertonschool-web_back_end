export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradeVar = grades.find((grade) => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (gradeVar && gradeVar.grade) || 'N/A',
      };
    });
}
