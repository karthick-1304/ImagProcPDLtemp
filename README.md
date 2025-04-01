# Certificate Verification System

## Overview
This project is a **NPTEL Certificate Verification System** that allows students to upload their certificate PDFs, extract text and images from them, and verify the extracted data with the NPTEL data at their sites ,thus this system provides the 100% originality of the certificate. The system also includes a tutor page where verified certificates can be viewed in a formatted manner.

## Features
### **Student Upload Certificate Page**
- Upload certificate PDF files.
- Extracts data (text and images) from the uploaded certificate.
- Displays extracted data in JSON format.
- Allows students to enter extracted values manually.
- Provides a **Verify** button to check if entered values match extracted values.
- Displays a confirmation message upon successful verification.

### **Tutor Page**
- Displays extracted certificate data in a structured format.
- Allows tutors to view verified certificates.

## Tech Stack
- **Backend**: Flask (Python)
- **Frontend**: React (Vite, JSX)
- **PDF Processing**: PyMuPDF (fitz)
- **Deployment**: TBD

## Installation
### **Backend Setup** (Flask)
1. Clone the repository:
   ```sh
   git clone https://github.com/karthick-1304/ImagProcPDLtemp.git
   cd certificate-verification/backend
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```sh
   python app.py
   ```

### **Frontend Setup** (React)
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```

## API Endpoints
### **Student Upload Page**
- **`POST /upload`**: Uploads and extracts text/images from a PDF.
- **`POST /verify`**: Verifies the extracted certificate data against user input.

### **Tutor Page**
- **`GET /certificates`**: Fetches verified certificates.

## How It Works
1. **Student Upload**: Students upload a certificate in PDF format.
2. **Extraction & Verification**: The backend extracts data, and students manually verify it.
3. **Tutor Review**: Verified certificates are displayed on the tutor page.

## License
This project is licensed under the MIT License.

---
**Author:** Ponkarthikeyan P 
**Contact:** ponkarthikeyan13@gmail.com

