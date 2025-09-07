const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");




const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main(){
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


main().then(() => {
  console.log("Connected to DB");
}).catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});
    

// app.get("/testListing", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "golden mountain peaks",
//         description: "amazing view of golden mountain peaks during sunset",
//         price: 250,
//         location: "Malibu, CA",
//         country: "USA"
//     });
//     await sampleListing.save();
//     console.log("Listing saved");
//     res.send("sucessful testing");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});


