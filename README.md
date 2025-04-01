# 🎓 **College Fee Payment DApp - Blockchain** 💳  
A **decentralized application** for students to pay college fees **securely using Ethereum & MetaMask**, eliminating third-party costs. This system enables **cross-border, instant, and tamper-proof** transactions.  


---

## 📌 **Why College Fee Payment DApp?**  

✅ **No Third-Party Fees** – Avoid extra charges for cross-border transactions.  
✅ **Fast & Secure Transactions** – Uses **Ethereum & MetaMask** for instant payments.  
✅ **Tamper-Proof Payments** – All transactions are **immutable & transparent**.  
✅ **Pay Anytime, Anywhere** – Supports global payments with **real-time verification**.  

---

## 🛠 **Tech Stack**  
| **Technology** | **Used For** |
|--------------|------------|
| **React, CSS** | Frontend UI |
| **Node.js, Express.js** | Backend API |
| **Solidity, Hardhat, MetaMask** | Blockchain Integration |
| **MongoDB** | Database Storage |

---

 


## 📸 **Screenshots**  

### **📌 Home Page**  
![HomePage](https://github.com/user-attachments/assets/fa6de2e9-8b06-4b43-9d85-08996b3a340b)  

### **📌 Student Profile Page**  
![Student Profile](https://github.com/user-attachments/assets/dd338532-98c4-4fde-9617-94781aeffc64)  

---

## 🔐 **User Authentication**  

📌 **1️⃣ Admin Login**  
- Admin can **view all transactions**, verify payments, and **manage student records**.  

📌 **2️⃣ Student Login**  
- Students can **pay fees**, track transactions, and view their **payment history**.  

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

📌 **Contract Name:** `CollegeFeePayment.sol`  
📌 **Functionality:**  
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
📧 **Email:** ponkarthikeyan13@gmail.com  
💼 **LinkedIn:** [Ponkarthikeyan13](https://www.linkedin.com/in/ponkarthikeyan-poolaiah)  

---

### **⭐ Star this repo if you found it useful!**  
Let me know if you need more improvements! 🚀🔥
