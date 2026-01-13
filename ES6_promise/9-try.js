export default function guardrail(mathFunction) {
  const queue = []; // Array used to collect results

  try {
    const value = mathFunction() // Runs provided function
    queue.push(value) // Appends return value if successful
  } catch (err) { // Catches error if mathFunction fails
    queue.push(err.toString()) // Appends error result instead
  } finally {
    queue.push('Guardrail was processed') // Appends to all versions of 'queue'
  }
  return queue
}
