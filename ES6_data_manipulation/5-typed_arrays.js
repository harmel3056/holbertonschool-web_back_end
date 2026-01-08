export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range'); // throws error where position will be outside given range
  }

  const buffer = new ArrayBuffer(length); //creates a buffer with the length parameter
  const int8 = new Int8Array(buffer); //establishes 8-bit element view

  int8[position] = value; // fills new buffer with value entered at [position] in array

  return new DataView(buffer) // returns the newly filled buffer
}
