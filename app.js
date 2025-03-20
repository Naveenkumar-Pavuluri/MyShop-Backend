const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors")
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/public")
const userRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const { verifyToken, isAdmin } = require("./middleware/auth-middleware")
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Get request is working");
})

app.use("/categories", verifyToken, isAdmin, categoryRoutes);
app.use("/brand", verifyToken, isAdmin, brandRoutes);
app.use("/orders", verifyToken, isAdmin,orderRoutes);
app.use("/product", verifyToken, isAdmin, productRoutes);
app.use("/customer", verifyToken,customerRoutes)
app.use("/auth", userRoutes)

async function connectionDB() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "e-comm-store-db"
    });
    console.log("MongoDB connected sucessfully")
}

connectionDB().catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});