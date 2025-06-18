// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" flex flex-col items-center  bg-[var(--primary-color)] text-white pt-12 pb-8 px-4"
      style={{
    backgroundImage: `url('/images/Patterns1.png'), url('/images/Patterns2.png')`,
      backgroundPosition: 'left bottom, right top',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: 'auto 80%, auto 60%',
    }}
    >
      <div className='containerDiv'>

     <div className="flex lg:flex-row flex-col justify-between item-center gap-4 mb-10">
     <div className="w-60 h-20 relative">
    <Image
      src="/logos/WhiteMployusLogo2.png"
      alt="MployUs Logo"
      fill
      className="object-contain"
    />
  </div>
          
          <div className="">
            <p className="mb-2" style={{color:'white' }}>Subscribe to our new letters</p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md px-5 py-3 w-full text-black bg-white"
              />
             <button className="border border-white bg-gradient-to-b from-[var(--primary-color)] to-[var(--primary-800)] hover:bg-white hover:text-[var(--primary-color)] px-4 rounded-md transition text-white">
              Subscribe
            </button>
            </div>
          </div>
        </div>

      <div className=" flex flex-wrap justify-between gap-8 w-full pb-8">
        {/* Logo + Subscription */}
       

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <span><li><Link href="/" className="footerLinks">Home</Link></li></span>
            <span><li><Link href="#" className="footerLinks">Products</Link></li></span>
            <span><li><Link href="/about" className="footerLinks">About Us</Link></li></span>
            <span><li><Link href="/blog" className="footerLinks">Prices</Link></li></span>
            <span><li><Link href="/blog" className="footerLinks">Blog</Link></li></span>
          </ul>
        </div>

                {/* Legal */}
        <div>
          <p className="font-semibold mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
            <span>
              <li>
              <Link href="/privacyPolicy" className="hover:underline">
                Privacy Statement
              </Link>
            </li>
            </span>
            <span>
              <li>
              <Link href="/termsAndConditions" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            </span>
            </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-semibold mb-4">Our Services</p>
          <ul className="space-y-2 text-sm">
            <span><li>MployUs HR Advice</li></span>
            <span><li>Recruitment Support</li></span>
            <span><li>Locums Provision</li></span>
            <span><li>HR Software & Mobile App</li></span>
            <span><li>Locum Software & Mobile App</li></span>
          </ul>
        </div>

        {/* Products */}
        <div>
          <p className="font-semibold mb-4">Our Products</p>
          <ul className="space-y-2 text-sm">
            <span><li>MployUs HR Software</li></span>
            <span><li>Recruitment Software</li></span>
            <span><li>MployUs Locums</li></span>
            <span><li>HR Software & Mobile App</li></span>
            <span><li>Locum Software & Mobile App</li></span>
            <span><li>Finance Management Software</li></span>
          </ul>
        </div>


      </div>

      {/* Contact + Locations + Social */}
      <div className=" flex flex-wrap justify-between gap-6 w-full pb-8 mt-8 text-sm text-[var(--secondary-100)] border-b border-[var(--primary-300)] ">
        <div>
          <p className="font-semibold flex flex-col mb-2">Contact Us:</p>
          <div style={{color:'white' }}> <span>📞 0818 900 300</span> </div>
          <div style={{color:'white' }}> <span>✉️ info@mployushr.com</span> </div>

          <div className='flex  mt-10 flex-row items-center gap-2'>
      <p className="font-semibold ">Connect with us on:</p>
      <div className="flex items-center space-x-4 ">
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaLinkedin size={20} />
      </Link>
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaTwitter size={20} />
      </Link>
    </div>
    </div>
        </div>

        <div>
           <p className="font-semibold mb-2">Our Locations:</p>
          <div className='flex flex-row '>
            
           
            <span style={{color:'white' }} className='max-w-[250px]'><strong>Mployus Ireland</strong><br />7 Station Hill, Clongriffin, Dublin, IRL</span>
            
            <span style={{color:'white' }} className='max-w-[250px]'><strong>Mployus UK</strong><br />82 Gorton Road, Stockport, Manchester, UK</span>
          
        </div>
        </div>

    <div >
      

      <div className="mt-4">
        <div className="bg-[#ffffff55] border border-white text-black px-10 py-2 rounded-md inline-flex items-center gap-2">
          <span className="text-xl">🇮🇪</span>
          <span>Ireland</span>
          <ChevronDownIcon className="w-4 h-4 ml-1 text-black" />
        </div>

        <p className='mt-2'>Download our HR Mobile App</p>
        <div className='flex items-center gap-4 mt-2'>
          <Link href="#" className="text-white hover:text-gray-300 transition">
          <Image
            src="/images/GooglePlay.png"
            alt="Google Play"
            width={120}
            height={40}
            className=""
          />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition">
            <Image
              src="/images/Apple.png"
              alt="Apple Store"
              width={120}
              height={40}
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-start text-xs text-[var(--secondary-200)]">
        <span style={{color:'white' }}>
          © 2025 Mployus, All Rights Reserved. Mployus Personnel Services t/a Mployus Recruitment.
          Registered in the Republic of Ireland. Registration Number: 734222. United Kingdom:
          Mployus Personnel Services Limited. Registration number: 15628375
        </span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;