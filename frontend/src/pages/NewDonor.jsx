import { useState } from "react";
import { publicRequest } from "../requestMethods"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const NewDonor = () => {

	const [inputs, setInputs] = useState({});
	const user = useSelector((state) => state.user);
	console.log(user.currentUser);
	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})

	}
	const handleDonors = async ()=>{
		try {
				await publicRequest.post("/donors", inputs, {
					headers : {token : `Bearer ${user.currentUser.accessToken}`}
				});
				toast.success("Donor has been successfully added to the database")
				setInputs({})
			

		} catch (error) {
			toast.warning(error.message)
			console.log(error);

		}
	}
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
				<h2 className="font-semibold">New Donor</h2>
				<div className="flex flex-col my-[12px]">
					<label htmlFor="">Name</label>
					<input
						type="text"
						placeholder="Your Name"
						name="name"
						value={inputs.name || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Address</label>
					<input
						type="text"
						placeholder="Your Address"
						name="address"
						value={inputs.address || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Tel</label>
					<input
						type="Number"
						placeholder="XXX XXX XXXX"
						name="tel"
						value={inputs.tel || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Blood Group</label>
					<select

						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
						name="bloodgroup"
						value={inputs.bloodgroup || ""}
						onChange={handleChange}
					>

						<option value="">Select Blood Group</option>
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
					</select>

					<label htmlFor="">E-Mail Address</label>
					<input
						type="email"
						placeholder="Your email Address"
						name="email"
						value={inputs.email || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />


				</div>
			</div>
			<div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
				<div className="flex flex-col">
					<label htmlFor="">Weight</label>
					<input
						type="number"
						placeholder="Your Weight(in kgs)"
						name="weight"
						value={inputs.weight || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>

					<label htmlFor="">Date of Birth</label>
					<input
						type="date"
						placeholder="Your Date of Birth(dd/mm/yyyy)"
						name="date"
						value={inputs.date || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>

					

					<label htmlFor="">Any Diseases</label>
					<textarea
						placeholder="N/A"
						name="diseases"
						value={inputs.diseases || ""}
						onChange={handleChange}
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>
					<button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]" onClick={handleDonors}>Create</button>
					<ToastContainer />
				</div>
			</div>
		</div>
	)
}

export default NewDonor
