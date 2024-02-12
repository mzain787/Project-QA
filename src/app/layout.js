import "./globals.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
export const metadata = {
  title:{
    default:"Muhammad Qammar"
  },
  description:"Full Stack Web App Developer"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>  
        <Header/>
        {/* WhatsApp widget div */}
        {children}
        <Footer/>
        <div className="elfsight-app-9aac4257-e515-4c3b-aabf-815711ea66e0" data-elfsight-app-lazy />
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />    
      </body>
    </html>
  );
}

