import { Link } from "react-router-dom";
function Navbar() {

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
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
