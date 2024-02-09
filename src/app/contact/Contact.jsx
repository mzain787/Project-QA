// Contact.js
import React from "react";
import "./Contact.css";
import contactImg from "../../assets/images/qa22.png";
import PageHeading from "@/components/Childcomps/PageHeading/PageHeading";
import MyAccordionComponent from "@/components/Childcomps/MyAccordianComponent/MyAccordianComponent";
import HomeComponentsHeading from "@/components/Childcomps/HomeComponentsHeading";
import Startups from "@/components/Childcomps/Startups";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  const accordionData = [
    {
      title: "What services do you offer?",
      content: "I provide end-to-end web development services, including front-end development, back-end development, database management, API integration, and Web Designing.",
    },
    {
      title: "What technologies do you specialize in?",
      content: "I specialize in a range of technologies including Figma, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and more.",
    },
    {
      title: "How do you approach a new project?",
      content: "I start by thoroughly understanding the project requirements and goals. Then, I plan out the architecture, choose the appropriate technologies, and proceed with agile development methodologies to ensure timely delivery and flexibility for any necessary adjustments.",
    },
    {
      title: "Preferred communication method during project?",
      content: "I am flexible with communication methods and adapt to my clients' preferences. Whether it's email, phone calls, video conferences, or project management tools, I ensure transparent and efficient communication throughout the project lifecycle.",
    },
    {
      title: "What is your pricing structure?",
      content: "My pricing structure varies depending on the scope and complexity of the project. I provide personalized quotes after discussing the project requirements in detail with the client.",
    },
  ];

  return (
    <div className="tilt-in-bl">
      <PageHeading pageHeading="Contact Me" />
      <div className="contact-section wrapper component-padding">
        <div className="contact-top mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.46260508665!2d-122.20590770532918!3d37.40296192972832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1706808729808!5m2!1sen!2s"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-helpus-heading">
          <HomeComponentsHeading
            smallheading="😎 I'M READY TO HELP YOU"
            heading="Feel Free To"
            subheading="Contact Me"
          />
        </div>
        <div className="contact-bottom flex gap-10 justify-center mb-10">
          <div className="contact-accordian self-center">
            <div className="mb-5">
            <MyAccordionComponent accordionData={accordionData} />
            </div>
            <div className="contact-buttons flex flex-wrap gap-2 items-center">
            <Link href="#footer">
            <button className="h-12 w-40 bg-orange-300 text-black text-sm font-medium tracking-wide">Contact Me</button>
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-qamar-915b75125/" target="_blank" className="text-purple-200 text-sm font-semibold">Message Me On Linkedin</Link>
            </div>
          </div>
          <div className="contact-image self-end">
            <Image src={contactImg} alt="contact-image" className="w-full" />
          </div>
        </div>
        <Startups/>
      </div>
    </div>
  );
};

export default Contact;
