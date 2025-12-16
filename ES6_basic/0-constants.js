export const taskFirst = (task = 'I prefer const when I can.') => task;

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
