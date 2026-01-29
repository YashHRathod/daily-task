require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose")

const app = express();
const PORT = process.env.PORT ;
const router=require("./routes")
const routerjson=require("./routestodojson")

app.use(cors({ origin: "*" }));
app.use(express.json());


console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });




app.use("/",router),
app.use("/json",routerjson)



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  