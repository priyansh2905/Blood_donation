

const NewDonor = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
				<h2 className="font-semibold">New Donor</h2>
				<div className="flex flex-col my-[12px]">
					<label htmlFor="">Name</label>
					<input
						type="text"
						placeholder="Your Name"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Address</label>
					<input
						type="text"
						placeholder="Your Address"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Phone Number</label>
					<input
						type="text"
						placeholder="XXX XXX XXXX"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />

					<label htmlFor="">Blood Group</label>
					<select className="border-[#555] border-2 border-solid p-[10px] w-[300px]">
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
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]" />


				</div>
			</div>
			<div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
				<div className="flex flex-col"> 
					<label htmlFor="">Weight</label>
					<input
						type="number"
						placeholder="Your Weight(in kgs)"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>

					<label htmlFor="">Date of Birth</label>
					<input
						type="date"
						placeholder="Your Date of Birth(dd/mm/yyyy)"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>

					<label htmlFor="">Any Diseases</label>
					<textarea
						type="number"
						placeholder="N/A"
						className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
					/>
					<button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]">Create</button>
				</div>
			</div>
		</div>
	)
}

export default NewDonor
