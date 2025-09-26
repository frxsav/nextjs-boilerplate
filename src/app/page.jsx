'use client';

export default function Home() {
  return (
    <div className="dark:bg-primary bg-primary-light pt-16">
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="bg-secondary-light dark:bg-secondary rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-cta text-ctext-light p-2 shadow-lg">
              asfdafdaadfd
            </span>
          </div>
          <h3 className="text-ctext-light dark:text-ctext mt-5 text-green font-medium tracking-tight">
            Writes upside-down
          </h3>
          <p className="text-ctext-light dark:text-ctext mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}
