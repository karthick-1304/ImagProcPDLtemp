# 🎓 **College Fee Payment DApp - Blockchain** 💳  
A **decentralized application** for students to pay college fees **securely using Ethereum & MetaMask**, eliminating third-party costs. This system enables **cross-border, instant, and tamper-proof** transactions.  

---

## 📌 **Why College Fee Payment DApp?**  

👉 **No Third-Party Fees** – Avoid extra charges for cross-border transactions.  
👉 **Fast & Secure Transactions** – Uses **Ethereum & MetaMask** for instant payments.  
👉 **Tamper-Proof Payments** – All transactions are **immutable & transparent**.  
👉 **Pay Anytime, Anywhere** – Supports global payments with **real-time verification**.  

---

## 🛠 **Tech Stack**  
| **Technology** | **Used For** |
|--------------|------------|
| **React, CSS** | Frontend UI |
| **Node.js, Express.js** | Backend API |
| **Solidity, Hardhat, MetaMask** | Blockchain Integration |
| **MongoDB** | Database Storage |
| **PDF Generation Library** | Receipt Generation |

---

## 📸 **Screenshots**  

### **📌 Home Page**  
![HomePage](https://github.com/user-attachments/assets/fa6de2e9-8b06-4b43-9d85-08996b3a340b)  

### **📌 Student Profile Page**  
![Student Profile](https://github.com/user-attachments/assets/dd338532-98c4-4fde-9617-94781aeffc64)  

![FeePayment Page](https://github.com/user-attachments/assets/9df2f935-dfdc-4a7a-8cfc-210119c47e0a)

![Payment with Metamask](https://github.com/user-attachments/assets/f6acac5e-c93a-4cb2-b387-3a30468b6fbc)

![Payment with Metamask_Pay](https://github.com/user-attachments/assets/5728e7fb-3508-4626-ba02-c5676205136b)

![Receipt Generated with Transaction Id and Time and Date](https://github.com/user-attachments/assets/fb3ca1d4-bbb5-49f6-bdff-f080823df4d3)

![AdminPage](https://github.com/user-attachments/assets/619e5e79-0b39-4655-a329-d7eb7fc5e2fa)

![AddNew Batch](https://github.com/user-attachments/assets/9d382139-a82e-42c3-ab14-93b2921cdff9)

![Release Fee for the students to pay with due dates and fine amounts](https://github.com/user-attachments/assets/f039d5bb-3b75-4220-a42b-93c608bfcf50)

![Querying the Details of Students about their payment status of particular fee](https://github.com/user-attachments/assets/d5174452-46f8-4f8e-b910-b0434f679d65)

![Querying the Details of a particular Student about their payment status](https://github.com/user-attachments/assets/45707c8f-906f-4240-bb63-c755dd886759)

---

## 🔒 **Key Features**  

👉 **Secure User Authentication**  
- **Admin Login:** View transactions, verify payments, and manage students.  
- **Student Login:** Pay fees, track transactions, and view payment history.  

👉 **Payment with MetaMask**  
- **Seamless Ethereum Transactions** for paying college fees directly from MetaMask.  
- **Instant Confirmation** with real-time blockchain verification.  

👉 **PDF Receipt Generation**  
- **Auto-generates PDF receipts** after successful payment.  
- **Contains transaction ID, timestamp, and payment details.**  

---

## 🚀 **Installation Guide**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/projectname.git
cd projectname
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Start the Frontend**  
```sh
npm run dev
```

### **4️⃣ Start the Backend**  
```sh
cd backend
npm install
npm start
```

### **5️⃣ Deploy Smart Contract**  
```sh
npx hardhat run scripts/deploy.js --network localhost
```

---

## 💰 **Smart Contract Details**  

👉 **Contract Name:** `CollegeFeePayment.sol`  
👉 **Functionality:**  
- `payFees(address student, uint amount)` → Process student fee payment  
- `getStudentBalance(address student)` → Retrieve balance  
- `withdrawFunds()` → Admin withdraws funds  

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CollegeFeePayment {
    mapping(address => uint) public studentFees;
    
    function payFees() public payable {
        studentFees[msg.sender] += msg.value;
    }

    function getBalance(address student) public view returns (uint) {
        return studentFees[student];
    }
}
```

---

## 📩 **Contact**  
💎 **Email:** ponkarthikeyan13@gmail.com  

---

### **⭐ Star this repo if you found it useful!**  
Let me know if you need more improvements! 🚀🔥
