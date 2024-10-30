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
      className={`bg-[#10b465] py-4 text-white font-bold font-mono fixed bottom-0 w-full transition-opacity duration-1000 ${
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
