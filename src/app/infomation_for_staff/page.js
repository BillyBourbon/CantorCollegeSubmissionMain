const InfomationForStaff = () => {
  const title = "Infomation For Staff"
  const infomation = [
    {title: "News", value: "Cantor College recently hosted the Software Engineering student of the year awards.  Shortlisted candidates from around the country attended the one day event. "},
    {title: "Academic Registry", value: "For academic regulations, assessment, awards, student records and course validation."},
    {title: "Catering Services", value: "Contact the Catering Services regarding on and off-site catering. "},
    {title: "Financial Services", value: "The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting. "},
    {title: "Information Systems Services", value: "The ISS team delivers the College’s computing facilities including all hardware and software.  They also run the staff helpdesk."},
    {title: "Marketing Services", value: "The Marketing Team will help promote events and new courses.  They will help with press release preparation. "},
    {title: "Personnel Services", value: "All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor. "},
    {title: "Facilities", value: "The facilities are responsible for the general care and maintenance of the College.  All enquiries via the main helpdesk. "},
  ]

  return ( 
    <div className="infomationForStaff">
      <h1>{title}</h1>
      <div className="infomationTable">
        <table>
          <tbody>
            {
              infomation.map((item,i) => (<tr key={i}>
                <td>{item.title}</td>
                <td>{item.value}</td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
   );
}
 
export default InfomationForStaff;