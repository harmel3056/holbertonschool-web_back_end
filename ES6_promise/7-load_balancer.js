export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload]) // .any returns the first promise to resolve. Takes promise objects.
    .then((result) => { // takes the result of .any
      return result; // returns that result
    })
}
