import { dbGet } from "../scripts/dbHelper"

const DesignCourses = async () => {
  const title = "Design Courses At Cantor College"
  const textContent = `The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
  The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
  You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
  `
  
  const query = "SELECT * FROM courses WHERE CourseSubject = 'Art and design' ORDER BY CourseTitle ASC"
  
  let {rows, fields} = await dbGet(query)

  return ( 
  <div className="designCourses">
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
 
export default DesignCourses;