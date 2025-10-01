import {
  Logo,
  LegalLinks,
  Socials,
  Copyright,
  DesktopMenuLinks,
} from '../components';

export default function Footer() {
  return (
    <>
      <div className="bg-secondary-light dark:bg-secondary p-4 px-12">
        <div className="grid md:justify-start justify-center col-span-12 pb-8 pt-4">
          <Logo />
        </div>
        <div className="grid grid-cols-12 border-b-1 border-ctext dark:border-ctext-light">
          {/* Quick Links */}
          <DesktopMenuLinks flexDirection="col" fromFooter={true} />
          {/* Privacy, Cookies and Terms&Cons */}
          <LegalLinks />
          <div className="col-span-12 flex justify-center md:justify-start">
            <Socials></Socials>
          </div>
        </div>
        <Copyright></Copyright>
      </div>
    </>
  );
}
