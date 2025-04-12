import {
  FaHome,
  FaUser,
  FaUsers,
  FaBox,
  FaCog,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

const Menu = () => {
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
        <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px] ">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-1 ">
            <FaHome className="mr-[15px] text-red-500"/>
            Home
          </li>
        </ul>

    </div>
  )
}

export default Menu
