export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
  // Checks type is string to ensure startsWith doesn't throw an error if non-string is input
    return '';
  }

  const result = [];

  for (const object of set) { // Accessing items within the set
    if (object.startsWith(startString)) { // Checks if string begins with chars of specified substring (bool)
      result.push(object.slice(startString.length));
      /* Here .slice takes a starting index based on the length of startString, and returns the
      remainder of substring after that index point. 
      push() appends the sliced string to the end of the result array. */
    }
  }

  return result.join('-'); // takes the result array and joins it into a string
}
