import Link from "next/link"

const WorkingWithBusiness = () => {
  const title = "Partner with Cantor College: Unlock Expertise, Innovation, and Growth"
  const textContent = `At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.`
  const textContentGetInTouch = "Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals."
  const services = [
    {text: "Custom Training and Development Programs Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences."},
    {text: "Research and Development Partnerships Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you."},
    {text: "Design and Technology Consultancy Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business."},
    {text: "Internships and Graduate Recruitment Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience."},
    {text: "Event Hosting and Sponsorship Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community."},
  ]
  const whyPartnerWithUs = [
    {text: "Cutting-Edge Expertise: Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design."},
    {text: "Innovation at the Core: We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions."},
    {text: "Tailored Solutions: We understand that every business is unique. Our services are customized to meet your specific objectives and challenges."},
    {text: "Future-Ready Talent: Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills."},
  ]

  return (
    <div className="workingWithBusiness">
      <h1>{title}</h1>
      <h2>{textContent}</h2>
      <br></br>
      <h1>Our Services</h1>
      <ul>
      {
        services.map((service,i)=>(
          <li key={i}>
            <h2>{i+1}. {service.text}</h2>
          </li>
        ))
      }
      </ul>
      <br></br>
      <h1>Why Partner with Cantor College?</h1>
      <ul>
      {
        whyPartnerWithUs.map((service,i)=>(
          <li key={i}>
            <h2>• {service.text}</h2>
          </li>
        ))
      }
      </ul>
      <br></br>
      <Link href="/contact_us"><h1>Get In Touch</h1></Link>
      <h2>{textContentGetInTouch}</h2>
    </div>
  );
}
 
export default WorkingWithBusiness;