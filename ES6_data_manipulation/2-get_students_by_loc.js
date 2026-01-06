/* Takes a list of students(array) and a city(string)
to facilitate the filter. The studentList database is filtered by
(student) as each array item, and the final function is enacted to 
match the location of the student to the city parameter entered */

export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
