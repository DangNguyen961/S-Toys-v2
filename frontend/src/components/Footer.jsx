import { useEffect, useState } from "react";

const Footer = () => {
  // State to control the display of the footer
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position of the page
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Show footer when scrolling to the bottom of the page
    if (scrollPosition >= pageHeight - 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`w-full font-mono py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold text-base shadow-lg hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} S-TOYS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
