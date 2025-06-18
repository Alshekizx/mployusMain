'use client';

import Link from 'next/link';
import { LockClosedIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Image from 'next/image';

const countries = [
  { name: 'Ireland', code: 'ie', file: 'https://flagcdn.com/ie.svg' },
  { name: 'England', code: 'gb-eng', file: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg' },
  { name: 'Scotland', code: 'gb-sct', file: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg' },
];

export function CountrySelector() {
  const [selected, setSelected] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 border border-[var(--primary-200)] rounded"
      >
        <div className="h-3 w-5 relative">
          <Image src={selected.file} alt={selected.name} fill className="object-cover" />
        </div>
        <span className="flex gap-1 items-center ">
          {selected.name}
          <ChevronDownIcon className="h-4 w-4 text-[--secondary-400]" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 bg-white border rounded shadow w-full">
          {countries.map((country) => (
            <li
              key={country.code}
              onClick={() => {
                setSelected(country);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <div className="h-3 w-5 relative">
                <Image src={country.file} alt={country.name} fill className="object-cover" />
              </div>
              <span className="">{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TopHeader() {
  return (
    <div className="w-full flex flex-col items-end py-2 px-[2rem] lg:px-[5rem]">
      <div className="flex flex-row items-center justify-between gap-10 h-full w-full lg:w-[40%]">
        <div className="flex flex-row items-center gap-7 px-3">
          <CountrySelector />
          <Link href={''}>
            <div className="text-sm text-gray-700 cursor-pointer hover:underline">
              <span className="">Career</span>
            </div>
          </Link>
          <Link href={'/blog'}>
            <div className="text-sm text-gray-700 cursor-pointer hover:underline">
              <span className="">Blog</span>
            </div>
          </Link>
        </div>

        <Link
          href={'#'}
          className="hidden lg:flex items-center gap-1 text-sm text-gray-700 hover:underline"
        >
          <LockClosedIcon className="h-4 w-4" aria-hidden="true" />
          <span className="">Login</span>
        </Link>
      </div>
    </div>
  );
}