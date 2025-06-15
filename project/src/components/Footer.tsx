import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Github,
  Code2
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/company/techcruisers',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/techcruisers',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/techcruisers',
      color: 'hover:text-gray-900'
    }
  ];

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TechCruisers</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Transforming businesses through innovative IT outsourcing solutions. 
              We partner with companies to accelerate growth and digital transformation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:solutions@techcruisers.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  solutions@techcruisers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-300">
              Get the latest insights on IT trends and solutions.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-center md:text-left">
              © {currentYear} TechCruisers. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg`}
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;