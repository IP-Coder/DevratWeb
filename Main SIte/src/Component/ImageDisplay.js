// import React, { useState, useEffect } from "react";
// import fb from "./Database/firebaseconfig";
// const storage = fb.storage;
// const ImageDisplay = () => {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     // Reference to the image file
//     const imageRef = storage.refFromURL(
//       "gs://red-agility-367213.appspot.com/24.png"
//     );

//     // Get the download URL for the image file
//     imageRef
//       .getDownloadURL()
//       .then((url) => {
//         // Set the image URL in the state
//         setImageUrl(url);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>{imageUrl ? <img src={imageUrl} alt="Image" /> : "Loading..."}</div>
//   );
// };

// export default ImageDisplay;
