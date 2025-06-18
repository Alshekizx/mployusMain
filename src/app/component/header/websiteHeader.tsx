'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowDownRightIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white relative flex flex-col items-center w-full top-0 ">
      
      <div className='max-w-[1400px] w-full px-[2rem] md:px-[5rem]'>     
      <div className="  py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logos/MployusIrelandLogo.png" alt="Logo" width={187} height={54} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-xl text-[var(--text-muted)]"
        >
          <FaBars />
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex space-x-6 text-[var(--text-muted)] text-base relative">
          <Link href="/" className="text-[var(--text-dark)] hover:text-[var(--text-muted)] transition"><p>Home</p></Link>
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="text-[var(--text-dark)] hover:text-[var(--text-muted)] transition relative"
          >
            <p className='flex items-center gap-1'>Products
              <ArrowDownRightIcon  className="h-5 w-5 text-[--secondary-400]" aria-hidden="true" />
            </p>
          </button>
          <Link href="/prices" className="text-[var(--text-dark)] hover:text-[var(--text-muted)] transition"><p>Pricing</p></Link>
        </nav>

        {/* Icons - Logos Group */}
        <div className="hidden lg:flex items-center space-x-4 text-[var(--text-muted)] text-lg">
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
          className=" hidden md:grid grid-cols-2 gap-x-10 gap-y-5 p-6  absolute top-[100%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl max-h-[80vh] overflow-y-auto"
          style={{ backgroundColor: 'var(--secondary-100 )' }}
        >
          {[
            { iconImg: "/images/HR.png",title: "HR Software", desc: "Manage staff documents, shifts, and attendance" },
            { iconImg: "/images/Law.png",title: "HR & Employment Law Advice", desc: "Expert HR and employment law support" },
            { iconImg: "/images/Finance.png",title: "Finance Software", desc: "Track budgets, income, and expenses with ease." },
            { iconImg: "/images/Locum.png",title: "Locums Provision", desc: "Browse open shifts and send locum requests" },
            { iconImg: "/images/Recruitment.png",title: "Recruitment Software", desc: "Simplify hiring with our smart recruitment tool." },
            { iconImg: "/images/Vector.png",title: "Jobs & Recruitment", desc: "Discover jobs. Connect with top talent." },
            { iconImg: "/images/Business.png",title: "Business Management Software", desc: "Track sales, assets, and subscriptions." },
            
          ].map((item, idx) => (
            <button key={idx} className="card space-y-1 text-start" onClick={() => {}}>
              <div className='flex flex-row gap-1'>
                <Image src={item.iconImg} alt={item.title} height={100} width={100} className="w-6 h-full" />
                <span className="font-semibold text-[var(--text-dark)] hover:text-[var(--text-muted)]">{item.title}</span>
                </div>
              <span className="text-[var(--text-muted)]" style={{fontSize:'14px'}}>{item.desc}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      
    </div>
    {isMobileMenuOpen && (
  <div className="lg:hidden top-20 bg-[var(--secondary-100)] p-4 space-y-2 w-full absolute ">
    <Link href="/" className="block text-[var(--text-dark)] hover:text-[var(--text-muted)]"><p>Home</p></Link>
    <button
      onClick={() => setIsProductsOpen(!isProductsOpen)}
      className="block w-full text-left text-[var(--text-dark)] hover:text-[var(--text-muted)]"
    >
      <p className='flex items-center gap-1'>Products
              <ArrowDownRightIcon  className="h-5 w-5 text-[--secondary-400]" aria-hidden="true" />
            </p>
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
                className="block w-full text-left text-[var(--text-dark)] hover:text-[var(--text-muted)]"
                onClick={() => {}}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
        <Link href="#pricing" className="block text-[var(--text-dark)] hover:text-[var(--text-muted)]"><p>Pricing</p></Link>

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