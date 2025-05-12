'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-[var(--card-bg)] text-[var(--text-dark)] border-b border-[var(--border-color)]  fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logos/MployusSoftwareLogo.png" alt="Logo" width={120} height={120} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-xl text-[var(--text-muted)]"
        >
          <FaBars />
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 text-[var(--text-muted)] text-base relative">
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="hover:text-[var(--text-dark)] transition relative"
          >
            Products
          </button>

          <Link href="#about" className="hover:text-[var(--text-dark)] transition">About Us</Link>
          <Link href="#pricing" className="hover:text-[var(--text-dark)] transition">Pricing</Link>
          <Link href="#blog" className="hover:text-[var(--text-dark)] transition">Blog</Link>
        </nav>

        {/* Icons - Logos Group */}
        <div className="hidden md:flex items-center space-x-4 text-[var(--text-muted)] text-lg">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logos/MployusLocumsLogo.png" alt="Logo" width={70} height={70} />
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logos/MployusHRLogo.png" alt="Logo" width={70} height={70} />
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logos/MployusRecruitmentLogo.png" alt="Logo" width={70} height={70} />
          </Link>
        </div>
      </div>

      {/* Dropdown for Products (Desktop) */}
      {isProductsOpen && (
        <div
          onMouseLeave={() => setIsProductsOpen(false)}
          className=" hidden md:grid grid-cols-3 gap-4 p-6  absolute top-[100%] left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl text-sm"
          style={{ backgroundColor: 'var(--background )' }}
        >
          {[
            { title: "HR Software", desc: "Manage staff documents, shifts, attendance in our all-in-one HR software solution." },
            { title: "Finance Software", desc: "Manage workplace budgets, income, expenses and more." },
            { title: "Recruitment Software", desc: "Manage hiring with our cutting-edge recruitment software." },
            { title: "Business Management Software", desc: "Record transactions, assets, job subscriptions, sales reports and drive business success." },
            { title: "HR & Employment Law Advice", desc: "Expert HR solutions and employment law guidance to keep your business compliant." },
            { title: "Jobs & Recruitment", desc: "Connect with top talent with our expert recruitment services." },
            { title: "Locums Provision", desc: "Efficient locum & agency staff provision services for healthcare facilities." },
          ].map((item, idx) => (
            <button key={idx} className="modalCard space-y-1 text-start" onClick={() => {}}>
              <h4 className="font-semibold text-[var(--text-dark)]">{item.title}</h4>
              <p className="text-[var(--text-muted)]">{item.desc}</p>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
  <div className="md:hidden bg-[var(--card-bg)] px-4 pb-4 space-y-2 text-[var(--text-muted)]">
    <button
      onClick={() => setIsProductsOpen(!isProductsOpen)}
      className="block w-full text-left hover:text-[var(--text-dark)]"
    >
      Products
    </button>

    {/* Mobile Products Dropdown */}
    {isProductsOpen && (
          <div className="pl-4 space-y-2 text-sm">
            {[
              { title: "HR Software" },
              { title: "Finance Software" },
              { title: "Recruitment Software" },
              { title: "Business Management Software" },
              { title: "HR & Employment Law Advice" },
              { title: "Jobs & Recruitment" },
              { title: "Locums Provision" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="block w-full text-left hover:text-[var(--text-dark)]"
                onClick={() => {}}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}

        <Link href="#about" className="block hover:text-[var(--text-dark)]">About Us</Link>
        <Link href="#pricing" className="block hover:text-[var(--text-dark)]">Pricing</Link>
        <Link href="#blog" className="block hover:text-[var(--text-dark)]">Blog</Link>

        <div className="flex justify-start space-x-4 pt-2">
          <div>
            <Image src="/logos/MployusLocumsLogo.png" alt="Logo" width={50} height={50} className="w-full h-full object-cover"/>
          </div>
          <div>
            <Image src="/logos/MployusHRLogo.png" alt="Logo" width={50} height={50} className="w-full h-full object-cover"/>
          </div>
          <div>
            <Image src="/logos/MployusRecruitmentLogo.png" alt="Logo" width={50} height={50} className="w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    )}
    </header>
  );
}