import "./globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
export const metadata = {
  title: "M. Qammar",
  description: "Full-Stack Web App Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>        
        <Sidebar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
