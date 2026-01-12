export default function handleResponseFromAPI(promise) {
  return promise // Works with an incoming promise not building its own
  .then(() => { // Runs only if promise resolves. If we received the resolved value it would go in the ()
    console.log('Got a response from the API'); // Required for every response
    return {
      status: 200,
      body: 'success'
    }; // Becomes the resolved value, a new promise object
    /* Here we use .then() to normalise data; no matter what the original promise
    resolves with, we return a consistent object. We might do this to hide the raw response
    as a forinstance */
  })
  .catch(() => { // Runs only if incoming promise rejects, the error handler
    console.log('Got a response from the API');
    return {}; // Handles the rejection with an empty return, no error message will return
  });
}
