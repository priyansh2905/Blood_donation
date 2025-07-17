import React, { useState, useEffect } from "react";
import { Gauge } from "@mui/x-charts/Gauge"
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { FaUser } from "react-icons/fa";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const [bloodGroupData,setBloodGroupData]=useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{

		const getBloodGroupStats=async()=>{
			try {

				const res = await publicRequest.get("/donors/stats");
				console.log(res.data);
				const transformedData = res.data.map((item,index)=>({
					id:index,
					value: item.count,
					label: `Blood Group ${item._id}`
				}))
				setBloodGroupData(transformedData);
			} catch (error) {
				console.log(error)
			}
			
		}

		getBloodGroupStats()

	},[])

	// console.log(bloodGroupData)
	const dataset = [{ x: 1, y: 32 }, { x: 2, y: 41 }, { x: 3, y: 10 }];
	const donorList = ["a", "b", "c", "d"];
	const rightPieData = [{ value: 10, color: "red", label: "A" },
	{ value: 20, color: "blue", label: "B" },
	{ value: 40, color: "yellow", label: "C" },
	{ value: 30, color: "green", label: "D" },
	]

	const handleLogout = () => {
		dispatch(logout());
		navigate("/login");
		// localStorage.removeItem("persist:root");
		// localStorage.removeItem("user");
		// localStorage.removeItem("persist:donor");
		// localStorage.removeItem("donor");
		// window.location.reload();
	}
	return (
		<div className="flex justify-between h-[100vh]">
			<div className="flex flex-col">
				<div className="flex flex-wrap">
					<div className="bg-gray-50 m-[30px] w-[350px] shadow-xl h-[300px]">
						<div className="h-[200px] w-[200px]">
							<Gauge
								value={75}
								startAngle={0}
								endAngle={360}
								innerRadius="80%"
								outerRadius="100%"
							// ...
							/>
						</div>
						<h2 className="font-semibold text-[10px] m-[40px]">Prospects</h2>
					</div>
					<div className="bg-gray-50 m-[30px] w-[350px] shadow-xl h-[300px]">
						<div className="h-[200px] w-[200px] m-[30px] border-[20px] border-red-400 border-solid rounded-full">
							{/* <Gauge
								value={75}
								startAngle={0}
								endAngle={360}
								innerRadius="80%"
								outerRadius="100%"
							// ...
							/> */}
							<div className="flex items-center justify-center m-[30px]">
								<h2 className="font-semibold text-[10px] m-[40px]">100</h2>
							</div>
							<h2 className="font-semibold text-[10px] m-[40px]">Donors</h2>
						</div>
					</div>
				</div>
				<div>
					<LineChart
						dataset={dataset}
						xAxis={[{ dataKey: 'x' }]}
						series={[{ dataKey: 'y' }]}
						height={300}
						margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
						grid={{ vertical: true, horizontal: true }}
					/>
				</div>
			</div>
			<div className="flex flex-col bg-gray-100 m-[20px] h-[700px] w-full shadow-xl overflow-auto">
				<div className="flex items-center m-[20px] cursor-pointer">
					<FaUser />
					<span className="ml-[10px] font-semibold" onClick={handleLogout}>Logout</span>
				</div>
				<div className="flex flex-col items-center mt-[10px] overflow-auto">
					<h2 className="font-bold">Recent Donors</h2>
					<ul>
						{
							donorList.map((donor, key) => {
								return (<li key={key}>{key + 1}. {donor}</li>)
							})
						}
					</ul>
					<div className="h-[300px] w-[300px]">
						<PieChart
							series={[
								{
									data:bloodGroupData,
									//data: rightPieData,
									innerRadius: 50,
									outerRadius: 70,
									paddingAngle: 5,
									cornerRadius: 5,
									startAngle: -90,
									endAngle: 180,
									cx: 150,
									cy: 100,
								},
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin