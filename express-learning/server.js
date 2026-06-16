const express = require("express");

const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Arjun" },
  { id: 3, name: "Shalbin" }
];

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.json(student);
});

app.post("/students", (req, res) => {
  const student = req.body;

  students.push(student);

  res.json({
    message: "Student Added",
  });
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  student.name = req.body.name;

  res.json({
    message: "Student Updated",
  });
});

app.delete("/students/:id" , (req,res) => {
    const id = Number(req.params.id);

    const student = students.filter((s) => s.id !== id);


    res.json({
      message: "Student Deleted",
    });
    
});

app.listen(5000, () => {
  console.log("Server Running");
});
