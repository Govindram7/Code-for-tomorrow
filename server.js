require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/",(req,res)=>{
//   res.send("Welcome to the Authentication API");  
// })
app.use("/reset-password", express.static(path.join(__dirname, "views")));
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected successfully");
}
).catch((err) => {
  console.error("MongoDB connection error:", err);
}
);
 
  app.listen(process.env.PORT || 5000, () => {      
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  }
);    
