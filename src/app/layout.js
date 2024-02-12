import "./globals.css";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
// export const metadata = {
//   title: "Muhammad Qammar",
//   description: "Full-Stack Web App Developer",
// };
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
        <div className="elfsight-app-9aac4257-e515-4c3b-aabf-815711ea66e0" data-elfsight-app-lazy />
        {children}
        <Footer/>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />    
      </body>
    </html>
  );
}

