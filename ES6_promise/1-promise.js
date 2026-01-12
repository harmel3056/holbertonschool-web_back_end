export default function getFullResponseFromAPI(success) { // Boolean parameter (true, false)
  if (success === true) {
    return Promise.resolve({ // Creates a new 'resolve' promise, shorthand for 'new Promise'
      status: 200, // Object components
      body: 'Success'
    })
  };

  return Promise.reject(
    new Error('The fake API is not working currently')
  );
}
