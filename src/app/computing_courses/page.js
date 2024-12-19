import { dbGet } from "../scripts/dbHelper"

const ComputingCourses = async () => {
  const title = "Computing Courses At Cantor College"
  const textContent = `The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
  The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
  The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
  `
  
  const query = "SELECT * FROM courses WHERE CourseSubject = 'Computing' ORDER BY CourseTitle ASC"
  
  let {rows, fields} = await dbGet(query)

  return ( 
  <div className="ComputingCourses">
    <h1>{title}</h1>
    <br></br>
    <h2>{textContent}</h2>
    <br></br>
    <div className="coursesTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th>Course Name</th>
            <th>Department</th>
            <th>Course Type</th>
            <th>Course Summary</th>
            <th>Course Award Name</th>
            <th>Ucas Code</th>
            <th>Ucas Points</th>
            <th>Year Of Entry</th>
            <th>Mode Of Attendance</th>
            <th>Study Length</th>
            <th>Has A Foundation Year?</th>
            <th>Still Recruiting?</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {rows.map(course=>
            <tr key={course.CourseID}>
              <td>{course.CourseTitle}</td>
              <td>{course.CourseSubject}</td>
              <td>{course.CourseType}</td>
              <td>{course.CourseSummary}</td>
              <td>{course.CourseAwardName}</td>
              <td>{course.UcasCode}</td>
              <td>{course.UcasPoints}</td>
              <td>{course.YearOfEntry}</td>
              <td>{course.ModeOfAttendance}</td>
              <td>{course.StudyLength}</td>
              <td>{course.HasFoundationYear == "true" ? "Yes" : "No"}</td>
              <td>{course.StillRecruiting == "true" ? "Yes" : "No"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  </div> 
  );
}
 
export default ComputingCourses;