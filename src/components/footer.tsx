import Image from 'next/image';
import React from 'react'
import logoImage from "@/assets/images/logo.svg";
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <footer className='py-16'>
      <div className="container">
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
          <div>
            <Image src={logoImage} alt="Layers logo" />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} className='text-white/50 text-sm'>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer