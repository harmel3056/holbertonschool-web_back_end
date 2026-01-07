/* Uses the map function with (student) of array of students
in order to produce a list of corresponding student ids
*/
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.map((student) => student.id);
}
