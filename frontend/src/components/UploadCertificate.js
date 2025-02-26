import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UploadCertificate = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [qrExtracted, setQrExtracted] = useState(false);
  const [userInputs, setUserInputs] = useState({
    "Course Name": "",
    "Consolidated Score": "",
    "Online Assignment Score": "",
    "Proctored Score": "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [editEnabled, setEditEnabled] = useState(false);
  const [finalConfirmation, setFinalConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      alert("Upload failed");
    }
  };

  const extractQRCode = () => {
    // Simulate a QR extraction process
    if (result && result["QR Code"]) {
      setQrExtracted(true);
    } else {
      alert("QR Code extraction failed");
    }
  };

  const handleInputChange = (event) => {
    setUserInputs({
      ...userInputs,
      [event.target.name]: event.target.value,
    });
  };

  const verifyData = () => {
    const isCorrect = Object.keys(userInputs).every(
      (key) => userInputs[key] === result[key]
    );

    if (isCorrect) {
      setIsVerified(true);
    } else {
      alert("Data doesn't match. Please verify your entries.");
    }
  };

  const handleFinalSubmission = () => {
    if (finalConfirmation) {
      navigate("/TutorPage", { state: { verifiedData: result } });
    } else {
      alert("Please confirm before proceeding.");
    }
  };

  return (
    <div className="container">
      <h2>Hello User, Upload Your Certificate</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {result && (
        <div className="details-container">
          <h3>Extracted Details</h3>
          <div className="profile-section">
            <div className="info">
              <p><strong>Name:</strong> {result.Name}</p>
              <br/>
              <p><strong>Roll No of Certificate: </strong> {result['Roll No of Certificate']}</p>
              <br/>
              <p><strong>Time of Course:</strong> {result['Time of Course']}</p>
            </div>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>

          <h3>Enter Details from Certificate:</h3>
          <br/>
          <h5 style={{'color':'green'}}>Your data is precious. Please enter the details to cross check with our system!!</h5>
          <br/>
          {Object.keys(userInputs).map((key) => (
            <div key={key}>
              <label>{key}:</label>
              <input
                type="text"
                name={key}
                value={userInputs[key] || ""}
                onChange={handleInputChange}
              />
            </div>
          ))}

          {isVerified ? (
            <div>
            <p style={{ color: "green" }}>Data verified successfully!</p>
            <div style={{ display: "flex", alignItems: "start" }}>
              <input type="checkbox" onChange={() => setFinalConfirmation(!finalConfirmation)} />
              <span>Confirm & Proceed</span>
            </div>
            <button onClick={handleFinalSubmission}>Go to Tutor Page</button>
          </div>          
          ) : (
            <button onClick={verifyData}>Verify</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadCertificate;
