const Contact = () => {
    return (
      <div className="flex items-center justify-center my-[100px]">
        <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px] rounded-xl shadow-lg">
          <span className="text-[20px] mb-[20px] font-medium">
            Do you want to donate blood? Fill in the information:
          </span>
  
          <label className="text-[18px] mt-[10px] font-semibold">Name</label>
          <input type="text" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="Vaibhav" />
  
          <label className="text-[18px] mt-[10px] font-semibold">Telephone</label>
          <input type="text" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="787286793" />
  
          <label className="text-[18px] mt-[10px] font-semibold">Email</label>
          <input type="email" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="vaibhav@example.com" required />
  
          <label className="text-[18px] mt-[10px] font-semibold">Address</label>
          <input type="text" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="NewTown Kolkata" />
  
          <label className="text-[18px] mt-[10px] font-semibold">Weight</label>
          <input type="number" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="60kg" />
  
          <label className="text-[18px] mt-[10px] font-semibold">Blood Group</label>
          <select className="w-[350px] p-[15px] rounded-md bg-white">
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
          <label className="text-[18px] mt-[10px] font-semibold">Age</label>
          <input type="number" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="20" />
          <label className="text-[18px] mt-[10px] font-semibold">Do you have any diseases?</label>
          <textarea type="number" className="w-[350px] p-[15px] rounded-md bg-white" placeholder="N/A" />

            <button className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white">Submit</button>
        </div>
      </div>
    );
  };
  
  export default Contact;
  