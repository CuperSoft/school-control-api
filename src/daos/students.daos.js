const studentsDAO = {};
import Student from "../models/student.model.js";
// Method to get all students
studentsDAO.getAll = async () => {
  const students = await Student.find();
  return students;
};
//Method to get a student by student_id
studentsDAO.getOne = async (student_id) => {
  const student = await Student.findOne({ student_id: student_id });
  return student;
};
//Method to create a new student
studentsDAO.insertOne = async (studentData) => {
  const newStudent = await Student.create(studentData);
  return newStudent;
};
//Method to update a student by student_id
studentsDAO.updateOne = async (student_id, updateData) => {
  const updatedStudent = await Student.findOneAndUpdate(
    { student_id: student_id },
    updateData
  );
  return updatedStudent;
};
//Method to delete a student by student_id
studentsDAO.deleteOne = async (student_id) => {
  const deletedStudent = await Student.findOneAndDelete({
    student_id: student_id,
  });
  return deletedStudent;
};
export default studentsDAO;
