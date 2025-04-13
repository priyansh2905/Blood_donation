import { useState } from "react";
import {
	FaHome,
	FaUser,
	FaUsers,
	FaBox,
	FaCog,
	FaCalendarAlt,
	FaChartBar,
	FaElementor,
	FaHdd,
	FaClipboard,
	FaCalendar,
	FaCalendarWeek,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
	const [activeLink, setActiveLink] = useState("/admin");
	const handleActiveLink = (link) => {
		setActiveLink(link);
	}
	return (
		<div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg overflow-auto">
			<ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px] ">
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaHome className={`mr-[15px] text-red-500 ${activeLink === "/admin" ? "bg-red-600 text-white" : ""}`} />
						Home
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaUser className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Profile
					</li>
				</Link>
				<hr className="w-full my-[20px] border-gray-300" />
				<Link to="/admin/donors" onClick={() => handleActiveLink("/admin/donors")}>
					<li className={`flex items-center ${activeLink === "/admin/donors" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaBox className={`mr-[15px] ${activeLink === "/admin/donors" ? "text-white" : "text-red-500"}`} />
						Donors
					</li>
				</Link>
				<Link to="/admin/prospects" onClick={() => handleActiveLink("/admin/prospects")}>
					<li className={`flex items-center ${activeLink === "/admin/prospects" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaUsers className={`mr-[15px] ${activeLink === "/admin/prospects" ? "text-white" : "text-red-500"}`} />
						Prospects
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaHome className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Orders
					</li>
				</Link>
				<hr className="w-full my-[20px] border-gray-300" />
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaElementor className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Elements
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaCog className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Settings
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaHdd className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Backups
					</li>
				</Link>
				<hr className="w-full my-[20px] border-gray-300" />
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaChartBar className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Charts
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaClipboard className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						All Logs
					</li>
				</Link>
				<Link to="/admin" onClick={() => handleActiveLink("/admin")}>
					<li className={`flex items-center ${activeLink === "/admin" ? "bg-red-600 text-white pl-4" : ""} font-semibold text-[20px] cursor-pointer mt-[20px] transition-colors duration-1`}>
						<FaCalendarAlt className={`mr-[15px] ${activeLink === "/admin" ? "text-white" : "text-red-500"}`} />
						Calendar
					</li>
				</Link>
			</ul>

		</div>
	)
}

export default Menu
