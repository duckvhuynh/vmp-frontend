import Link from 'next/link';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="relative z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/vmp-logo-dark.jpg"
              alt="Visit Mauritius Paradise"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
