import {Link} from "react-router-dom" 
const Footer = () => {
  return (
    <div className="bg-gray-100 px-[200px] h-[60vh] mt-[50px]">
      <div className="flex justify-between py-[5%]">
        <div>
          <img src="logo_bloodbridge_1.jpg" alt="" height={200} width={200} />
          <span>Saving lives, one donation at a time.</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Donate</li>
            <li className="hover:underline">Contact</li>
            
            <Link to="/login">
            <li className="hover:underline">Admin</li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2">123 BloodConnect Ave, City</p>
          <p className="mt-2">Phone: 678587689</p>
          <p className="mt-2">Email: example@mail.com</p>
        </div>
      </div>

      <div className="mt-8 border-t border-red-800 pt-4 text-center">
        <p>&copy; 2025 Bloodbridge. All rights reserved</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Twitter */}
          <a href="https://twitter.com" className="hover:text-red-400" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 fill-black hover:fill-red-400" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2.15-4.5 4.79 0 .38.03.75.1 1.1-3.75-.2-7.07-2.05-9.3-4.88a4.79 4.79 0 00-.61 2.41 4.8 4.8 0 002.13 3.98 4.43 4.43 0 01-2.04-.57v.06c0 2.3 1.6 4.2 3.75 4.63a4.52 4.52 0 01-2.03.08 4.53 4.53 0 004.22 3.13A9.05 9.05 0 013 19.54 12.84 12.84 0 009.29 21c7.55 0 11.68-6.5 11.68-12.13 0-.19 0-.37-.01-.56A8.18 8.18 0 0023 3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com" className="hover:text-red-400" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 fill-black hover:fill-red-400" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.794.716-1.794 1.764v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com" className="hover:text-red-400" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 fill-black hover:fill-red-400" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.77 8.205 11.363.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.11-.775.418-1.304.76-1.604-2.665-.3-5.467-1.336-5.467-5.94 0-1.312.47-2.383 1.236-3.223-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.48 11.48 0 016 0c2.29-1.554 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.768.84 1.235 1.91 1.235 3.223 0 4.61-2.807 5.636-5.48 5.933.43.372.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 22.27 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
