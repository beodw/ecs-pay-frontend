import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    src="../../../assets/Mask group.png"
                    alt="Your Image"
                    className="max-w-full h-auto logo lg:ml-0"
                    style={{maxWidth:'5.563rem', height:'5.563rem'}}
                  />
                </Link>
              </div>
            </div>

            <div className="hidden md:block" style={{marginLeft:'22.25rem'}}>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </Link>
                <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQs
                </Link>
                <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  className="rounded-full base-btn hover:bg-black"
                  style={{maxWidth: '12.188rem', height: '3.5rem'}}
                  
                >
                  Send Money
                </button>
                <Link
                  to="/login"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                  style={{marginLeft: '20px'}}
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#31240B] focus:outline-none focus:bg-[#31240B] focus:text-white"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="block">
          <ul className="text-center pt-[2rem]">
            <li className="mb-2">
            <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </Link>
            </li>

            <li className="mb-2">
            <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQs
                </Link>
            </li>

            <li className="mb-2">
            <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </Link>
            </li>

            <li className="mb-8">
            <Link
                  to="#"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
            </li>
          </ul>      
                <div className="ml-10 block items-baseline space-x-4">
                <button
                  className="rounded-full base-btn hover:bg-[#31240B]"
                  style={{maxWidth: '12.188rem', height: '3.5rem'}}
                  
                >
                  Send Money
                </button>
                <Link
                  to="/login"
                  className=" px-3 py-2 rounded-md text-sm font-medium"
                  style={{marginLeft: '20px'}}
                >
                  Login
                </Link>
              </div>
         </div>
    </div>
      </nav>

    </div>
  );
}

export default Navbar;
