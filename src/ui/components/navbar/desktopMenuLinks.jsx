import Link from 'next/link';

export default function DesktopMenuLinks() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <Link
          href="/"
          className="text-secondary dark:text-secondary-light dark:hover:bg-secondary-light-100 hover:bg-secondary-100 px-3 py-2 rounded-md font-medium transition-colors">
          Home
        </Link>
        <Link
          href="/about"
          className="text-secondary dark:text-secondary-light dark:hover:bg-secondary-light-100 hover:bg-secondary-100 px-3 py-2 rounded-md font-medium transition-colors">
          About
        </Link>
        <Link
          href="/services"
          className="text-secondary dark:text-secondary-light dark:hover:bg-secondary-light-100 hover:bg-secondary-100 px-3 py-2 rounded-md font-medium transition-colors">
          Services
        </Link>
        <Link
          href="/contact"
          className="text-secondary dark:text-secondary-light dark:hover:bg-secondary-light-100 hover:bg-secondary-100 px-3 py-2 rounded-md font-medium transition-colors">
          Contact
        </Link>
      </div>
    </div>
  );
}
