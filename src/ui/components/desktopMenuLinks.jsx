import Link from 'next/link';

export default function DesktopMenuLinks(props) {
  return (
    <div className={`${!props.fromFooter ? 'hidden md:block' : 'block col-span-4 md:col-start-1 col-start-4'}`}>
      <div className={`flex flex-${props.flexDirection} space-x-4`}>
        <p
          className={`text-ctext-light dark:text-ctext font-bold pb-4 text-xl ${
            props.fromFooter ? 'block' : 'hidden'
          }`}>
          Quick Links
        </p>
        <Link
          href="/"
          className={`text-secondary dark:text-secondary-light px-3 py-2 rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4'
              : 'dark:hover:bg-secondary-light-100 hover:bg-secondary-100'
          }`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`text-secondary dark:text-secondary-light px-3 py-2 rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4'
              : 'dark:hover:bg-secondary-light-100 hover:bg-secondary-100'
          }`}>
          About
        </Link>
        <Link
          href="/services"
          className={`text-secondary dark:text-secondary-light px-3 py-2 rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4'
              : 'dark:hover:bg-secondary-light-100 hover:bg-secondary-100'
          }`}>
          Services
        </Link>
        <Link
          href="/contact"
          className={`text-secondary dark:text-secondary-light px-3 py-2 rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4'
              : 'dark:hover:bg-secondary-light-100 hover:bg-secondary-100'
          }`}>
          Contact
        </Link>
      </div>
    </div>
  );
}
