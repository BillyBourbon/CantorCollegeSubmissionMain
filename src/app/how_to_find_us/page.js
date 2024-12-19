const HowToFindUs = () => {
  
  const title = "How To Find Us"
  const textContent = "Feel free to get in touch with a member of our team using the details provided below."
  const contactMethods = [
    {type: "Address", value: "Cantor College, Main Street, Sheffield, SC4 2BB"},
    {type: "Fax", value: "(01321) 2340 236"},
    {type: "Email", value: "info@cantorcollege.ac.uk"}
  ]
  return ( 
    <div className="howToFindUs">
    <h1>{title}</h1>
    <br></br>
    <h2>{textContent}</h2>
    <br></br>
    <table className="findUsTable">
      <tbody>
        {
          contactMethods.map((contact, i)=>(<tr key={i}>
            <td>{contact.type}</td>
            <td>{contact.value}</td>
          </tr>))
        }
      </tbody>
    </table>
  </div>
   );
}
 
export default HowToFindUs;