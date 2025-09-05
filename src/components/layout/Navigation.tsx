'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CTA_BUTTONS, NAVIGATION_ITEMS } from '@/constants/navigation';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-8 lg:flex">
        {NAVIGATION_ITEMS.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="font-raleway font-medium text-[#022926] transition-colors hover:text-[#BCAA72]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="hidden items-center space-x-4 lg:flex">
        {CTA_BUTTONS.map(button => (
          <Link
            key={button.href}
            href={button.href}
            className={
              button.variant === 'primary'
                ? 'font-raleway hover:bg-opacity-90 rounded bg-[#BCAA72] px-6 py-2 font-medium text-white transition-all'
                : 'font-raleway rounded border border-[#BCAA72] px-6 py-2 font-medium text-[#BCAA72] transition-all hover:bg-[#BCAA72] hover:text-white'
            }
          >
            {button.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="p-2 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6 text-[#022926]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-t bg-white shadow-lg lg:hidden">
          <div className="space-y-2 px-4 py-2">
            <Link href="/" className="block py-2 text-[#022926] hover:text-[#BCAA72]">Home</Link>
            <Link href="/about" className="block py-2 text-[#022926] hover:text-[#BCAA72]">About</Link>
            <Link href="/services" className="block py-2 text-[#022926] hover:text-[#BCAA72]">Services</Link>
            <Link href="/destinations" className="block py-2 text-[#022926] hover:text-[#BCAA72]">Destinations</Link>
            <Link href="/fleet" className="block py-2 text-[#022926] hover:text-[#BCAA72]">Fleet</Link>
            <Link href="/contact" className="block py-2 text-[#022926] hover:text-[#BCAA72]">Contact</Link>
            <div className="space-y-2 pt-2">
              <Link href="/quote" className="block rounded bg-[#BCAA72] py-2 text-center text-white">Get Quote</Link>
              <Link href="/sign-in" className="block rounded border border-[#BCAA72] py-2 text-center text-[#BCAA72]">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
