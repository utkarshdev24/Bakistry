import "../styles/fonts.css";

const Footer = () => {
  return (
    <footer className="bg-[#051C4F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 items-start min-h-[200px]">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/logo.png"
              alt="Bakistry Logo"
              className="h-28 w-28 rounded-full object-cover"
            />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-6 dm-sans-uppercase text-lg">Quick links</h3>
            <ul className="space-y-4 font-extralight dm-sans-uppercase text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  BLOGS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-6 dm-sans-uppercase text-lg">Contact us</h3>
            <div className="space-y-3 font-extralight dm-sans-uppercase text-sm">
              <p>SECTOR 121, NOIDA</p>
              <p>85XXXXXXXX</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></rect>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                ></path>
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                ></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-gray-600">
          <p className="dm-sans-uppercase font-light text-sm">&copy; 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
