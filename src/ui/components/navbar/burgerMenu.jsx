export default function BurgerMenu(props) {
  return (
    <div className="md:hidden">
      <button
        onClick={props.toggleMenu}
        className="p-2 rounded-md text-ctext dark:text-ctext-light dark:hover:bg-secondary-light-100 hover:bg-secondary-100 focus:outline-none"
        aria-label="Toggle menu">
        {props.isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
