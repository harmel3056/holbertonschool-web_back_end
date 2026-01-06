/* Returns the sum of student IDs in studentList array by using reduce(accumulator
per student object within studentList. The student id must be therefore be accessed.
(accumulator, student) are essentially the parameters for .reduce, and
accumulator + student.id become the iterators with a 0 initialValue.
*/
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, student) => accumulator + student.id, 0);
}
