import studentsDAO from "../daos/students.daos.js";
const studentsController = {};
studentsController.getAll = async (req, res) => {
  studentsDAO
    .getAll()
    .then((students) => {
      res.render("index.ejs", { students });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
studentsController.getOne = async (req, res) => {
  studentsDAO
    .getOne(req.params.student_id)
    .then((student) => {
      if (student) {
        res.render("edit.ejs", { student });
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
studentsController.insertOne = (req, res) => {
  studentsDAO
    .insertOne(req.body)
    .then((newStudent) => {
      res.redirect("/api/students/getAll");
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
studentsController.updateOne = (req, res) => {
  studentsDAO
    .updateOne(req.params.student_id, req.body)
    .then((updatedStudent) => {
      if (updatedStudent) {
        // Successfully updated
        res.redirect("/api/students/getAll");
      } else {
        // Student not found
        res.status(404).json({ message: "Student not found" });
      }
    })
    .catch((error) => {
      // An error occurred
      res.status(500).json({ message: error.message });
    });
};
studentsController.deleteOne = (req, res) => {
  studentsDAO
    .deleteOne(req.params.student_id)
    .then((deletedStudent) => {
      if (deletedStudent) {
        res.redirect("/api/students/getAll");
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
export default studentsController;
