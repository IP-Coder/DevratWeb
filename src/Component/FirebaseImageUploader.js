import { useState } from "react";
import fireb from "./Database/firebaseconfig";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebase = fireb.storage;

const FirebaseImageUploader = () => {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadButtonClick = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/new2.jpg`);
      await uploadBytes(storageRef, file);
      const downloadUrl1 = await getDownloadURL(storageRef);
      console.log(downloadUrl1);
      console.log("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadButtonClick}>Upload</button>
      {downloadURL && <img src={downloadURL} alt="Uploaded file" />}
    </div>
  );
};

export default FirebaseImageUploader;
