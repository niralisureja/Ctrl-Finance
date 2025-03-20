import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link href="/" className="block mb-6">
              <div className="relative w-[150px] h-[40px]">
                <Image
                  src="/images/logo.png"
                  alt="CTRL+F"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              Financial Guarantee Products Offering Guarantee and Other
              Bonds Including For Performance, Financial Obligation and
              Commitment That Give Credit Default Protection, Against
              Lending/Funding To MSME's by Financial Institutions.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
                </svg>
              </Link>
              <Link href="#" className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600" aria-label="Google">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" />
                </svg>
              </Link>
              <Link href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" />
                </svg>
              </Link>
              <Link href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700" aria-label="YouTube">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5401 6.42C22.4213 5.94541 22.1796 5.51057 21.8387 5.15941C21.4978 4.80824 21.0703 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.93008 4.59 2.50008 4.84 2.16008 5.19C1.82008 5.55 1.58008 5.99 1.46008 6.46C1.14884 8.20556 0.997397 9.97631 1.00008 11.75C0.996482 13.537 1.14805 15.3213 1.46008 17.08C1.59153 17.5398 1.83372 17.9581 2.16553 18.2945C2.49734 18.6308 2.91065 18.8738 3.36008 19C5.08008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0703 18.8668 21.4978 18.6118 21.8387 18.2606C22.1796 17.9094 22.4213 17.4746 22.5401 17C22.8514 15.2676 23.0029 13.5103 23.0001 11.75C23.0037 9.96295 22.8521 8.1787 22.5401 6.42Z" stroke="white" strokeWidth="1"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#f37022]">Discover Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-blue-600">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600">Our Products</Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-600 hover:text-blue-600">Our Offers</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#f37022]">Call Us</h3>
            <p className="mb-2 text-gray-600">We're always happy to help!</p>
            <a href="tel:+910000000000" className="text-xl font-semibold text-blue-600 block mb-6">+91 - 000 000 0000</a>

            <h3 className="text-lg font-semibold mb-4 text-[#f37022]">Reach Us</h3>
            <address className="text-gray-600 not-italic">
              E6, Lorem Street, Dummy Phase 1 Rd, <br />
              opp. Shell Petrol Pump, Lorem Ipsume <br />
              Simple Park, Baner, City, State 360002
            </address>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#f37022]">Write To Us</h3>
            <p className="mb-2 text-gray-600">Be it an enquiry write to us</p>
            <a href="mailto:info@ctrlfour.com" className="text-blue-600 font-semibold">info@ctrlfour.com</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CTRL+F. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
