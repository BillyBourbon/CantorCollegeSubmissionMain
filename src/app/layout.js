import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './styles/app.css'

export const metadata = {
  title: "Cantor College",
  description: "A Website Showcasing Cantor College",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <Navbar />
          <div className="content">
            {children}
          </div>
          <Footer />
        </div>        
      </body>
    </html>
  );
}
