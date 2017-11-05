//Holds the information for the students
import express from 'express';
const router = express.Router();

router.get('/students', (req, res) => {
  const data = req.app.get('appData');
  const pageStudents = data.students;

  res.render('students', {
    pageTitle: 'Students',
    students: pageStudents,
    pageID: 'students'
  });
  
});

router.get('/students/:studentsid', (req, res) => {
  const dataFile = req.app.get('appData');
  const students = dataFile.students[req.params.studentsid];
  res.send(`
      <h2>${students.Fullname}</h2>
      <h3>with ${students.Emailaddress}</h3>
      <p>${students.summary, students.courseofstudy}</p>
  `);
});

export default router;