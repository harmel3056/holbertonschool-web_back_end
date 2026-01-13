import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([ // Returns a Promise object (ARRAY) once all promises are settled
    signUpUser(firstName, lastName), // Attempts to create user
    uploadPhoto(fileName) // Attempts to upload photo
  ]).then((results) => 
    results.map((result) => ({ // Transform each settled result
      status: result.status, value: result.status === 'fulfilled' // Keep the status 'fulfilled'
        ? result.value // ternary: if result.status is "fulfilled" use value
        : result.reason // else "rejected" use reason
    })))
}
