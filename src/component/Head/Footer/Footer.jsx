import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Services', path: '/services' },
  // { label: 'Personal Blogs', path: '/blogs' },
  { label: 'Contact Me', path: '/Contact' }
];
const services = [
  { label: 'Web Development', path: '/' },
  { label: 'UI Development', path: '/' },
  { label: 'UI/UX Design', path: '/' },
  { label: 'SEO Optimization', path: '/' } // Add more as needed
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-[#b728ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="ml-2 text-xl font-bold">Ishan.j</span>
            </div>
            <p className="text-gray-400 mb-4">Innovative idea solutions for the modern world.</p>
            <div className="flex space-x-4 text-[#b728ff]">
              <a href="https://github.com/Ishan-web-dev" target='_blank' aria-label="GitHub" className="hover:text-white transition"><FaGithub /></a>
              <a href="https://www.facebook.com/ishaan.joshi.52056/" target='_blank' aria-label="Facebook" className="hover:text-white transition"><FaFacebookF /></a>
              <a href="https://twitter.com/IshanJoshi86" target='_blank' aria-label="Twitter" className="hover:text-white transition"><FaTwitter /></a>
              {/* <a href="#" aria-label="Instagram" className="hover:text-white transition"><FaInstagram /></a> */}
              <a href="https://www.linkedin.com/in/ishan-linkdin/" target='_blank' aria-label="LinkedIn" className="hover:text-white transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow">
            <h3 className="text-lg font-semibold text-[#b728ff] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Services Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow">
            <h3 className="text-lg font-semibold text-[#b728ff] mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Card */}
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow">
            <h3 className="text-lg font-semibold text-[#b728ff] mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-1">
              <p>Jaipur, Rajasthan</p>
              <p>Pin: 302012</p>
              <p>
                Email: <a href="mailto:Workiishan86@gmail.com" className="hover:text-white transition">Workiishan86@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+917297881725" className="hover:text-white transition">+91 7297881725</a>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Company. All rights reserved.</p>
          {/* Uncomment below if you add more policy links later */}
          {/* <div className="flex space-x-6">
            <Link to="/" className="text-gray-500 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link to="/" className="text-gray-500 hover:text-white text-sm transition">Terms of Service</Link>
            <Link to="/" className="text-gray-500 hover:text-white text-sm transition">Cookies</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
