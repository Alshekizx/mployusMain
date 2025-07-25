'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

type Breadcrumb = {
  label: string;
  href?: string;
};

type HeroSectionProps = {
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  backgroundClassName?: string; // extra classes like bg-color or background-image
};

export default function HeroSection({
  title,
  description,
  breadcrumbs = [],
 
}: HeroSectionProps) {
  return (
    <div className={`relative flex flex-col items-center w-full bg-[var(--primary-color)] `}>
      <Image
              src="/images/bg222.png"
              alt="bg pattern"
              height={400}
              width={500}
              className="absolute hidden lg:block w-80 right-0 top-0 z-0"
              />
      <div
      className={`relative max-w-[1400px]  w-full flex flex-col items-center justify-center  px-4 h-90 text-white text-center `}
    >
      {breadcrumbs.length > 0 && (
        <div className="absolute top-10 left-6 flex items-center gap-1 text-sm">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              {item.href ? (
                <Link className="underline" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-6xl font-bold mb-4">{title}</h3>
      <p className=" max-w-6xl" style={{ color: 'white' }}>
        {description}
      </p>
    </div>
    </div>
  );
}
