"use client";

const Footer = () => {
  return (
    <footer className="bg-[#133E87] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gym Scheduler</h2>
            <p className="text-sm">
              Your one-stop solution for managing gym schedules, trainers, and memberships seamlessly. Empowering fitness one step at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:underline">
                  Classes
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm">Email: info@gymscheduler.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
            <p className="text-sm">Address: 123 Fitness St, Wellness City</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="hover:opacity-80">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gym Scheduler. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
