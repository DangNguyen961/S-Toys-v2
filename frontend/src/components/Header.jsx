import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-[#10b465]">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="font-bold text-xl text-white font-mono no-underline"
            >
              <img
                src="/image/logo.png"
                alt="S-TOYS Logo"
                className="inline-block h-8 mr-2 rounded-full spin"
              />
              S-TOYS
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex items-center">
              <button
                onClick={toggleSearch}
                className="mr-4 text-white focus:outline-none"
              >
                {searchVisible ? (
                  <i className="bi bi-x-lg"></i>
                ) : (
                  <i className="bi bi-search"></i>
                )}
              </button>
              {searchVisible && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="mr-4 p-2 rounded-md font-mono border border-gray-300"
                />
              )}
              <Nav.Link>
                <Link
                  to="/"
                  className="font-semibold font-mono text-lg text-white"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/cart"
                  className="font-semibold font-mono text-lg text-white"
                >
                  Cart
                  <span className="count d-flex align-items-center justify-center absolute top-[-6px] right-[-4px] bg-[#ea2b0f] rounded-full w-[20px] h-[20px]">
                    1
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/login"
                  className="font-semibold font-mono text-lg text-white"
                >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
