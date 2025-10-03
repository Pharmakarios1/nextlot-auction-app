import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold text-white">NextLot Auctions</h3>
          <p className="mt-3 text-sm text-slate-400">
            Your trusted online auction platform. Browse, bid, and win with security and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/faqs" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{' '}
              <a href="mailto:support@nextlot.com" className="hover:text-white">
                support@nextlot.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </a>
            </li>
            <li>Address: 123 Auction St, BidCity, USA</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NextLot Auctions. All rights reserved.
      </div>
    </footer>
  )
}
