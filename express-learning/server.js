const mongoose = require("mongoose");

const express = require("express");

const app = express();


app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://shalbinms:XiDXYLisD%40Rin2.@cluster0.93rja.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  


const studentSchema = new mongoose.Schema({
  name: String,
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name,
    });

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.get("/students/:id", async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      },
    );

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    res.json({
      message: "Student deleted",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.listen(5000, () => {
  console.log("Server Running");
});
