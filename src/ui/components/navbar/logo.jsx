import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Logo
        </span>
      </Link>
    </div>
  );
}
