import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() { // If we took params here it would override the imported functions
  return Promise.all([uploadPhoto(), createUser()]) // Calls the functions, which construct promises and return function objects
    .then(([photo, user]) => { // The [] destructures the ARRAY returned by Promise.all(), as it doesn't return multiple arguments
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`) // Backticks for template literals 
    })
    .catch(() => {
      console.log('Signup system offline');
      return new Error();
    });
}
