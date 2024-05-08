import dotenv from "dotenv";
import { insertArrTeachers } from "./modules/teachersModule.js";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import teachersRoutes from "./api/teachersRoutes.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api/teachers", teachersRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server in running on http://localhost:${port}`);
});

const teachers = [
  {
    fullName: "Vladimir Dotsenko",
    passportId: 324423334,
    salary: 10000,
    profession: "Architecture",
  },
  {
    fullName: "Ahmad Gondiya",
    passportId: 124456774,
    salary: 12000,
    profession: "Civil Engineer",
  },
  {
    fullName: "Daniel Hatotah",
    passportId: 77777777,
    salary: 25000,
    profession: "Programmer",
  },
  {
    fullName: "Ignat Korotkov",
    passportId: 456474223,
    salary: 9000,
    profession: "Driving",
  },
  {
    fullName: "Rami Shakshuka",
    passportId: 111122222,
    salary: 8000,
    profession: "Cooking",
  },
];

// insertArrTeachers(teachers);
