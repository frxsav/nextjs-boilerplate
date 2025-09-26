import Link from 'next/link';

export default function LegalLinks() {
  return (
    <div className="flex flex-col space-y-2 text-sm text-ctext-light dark:text-ctext col-span-4">
      <p className="text-ctext-light dark:text-ctext font-bold pb-4 text-xl">
        Legal Links
      </p>
      <Link
        href="/privacy-policy"
        className="text-secondary dark:text-secondary-light hover:underline underline-offset-4 px-3 py-2 rounded-md font-medium transition-colors">
        Privacy Policy
      </Link>
      <Link
        href="/terms-of-service"
        className="text-secondary dark:text-secondary-light hover:underline underline-offset-4 px-3 py-2 rounded-md font-medium transition-colors">
        Terms of Service
      </Link>
      <Link
        href="/cookie-policy"
        className="text-secondary dark:text-secondary-light hover:underline underline-offset-4 px-3 py-2 rounded-md font-medium transition-colors">
        Cookie Policy
      </Link>
    </div>
  );
}
