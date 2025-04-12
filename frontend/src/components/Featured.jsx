


const Featured = () => {
  return (
    <div className="flex px-[200px] mt-[100px]">
      <div className="bg-gray-200 h-[400px] w-[500px] z-10 mt-[20px]">
        <div className="m-10">
          
          <h1 className="text-[25px] font-semibold">Who we are?</h1>
          <hr className="border-none bg-red-500 w-[150px] h-[3px] my-5" />
          <span>Bloodbridge is for public donation center with blood donation members in the changing health care system.</span>
          <ul>
            <li className="mt-3">1. Specialist blood donors and clinical supervision</li>
            <li className="mt-3">2. Increasing communication with our members</li>
            <li className="mt-3">3. High quality assessment</li>
            <li className="mt-3">4. Examine clinically  to ensure alignment</li>
            <li className="mt-3">5. The extra care of a multi-disciplinary Team</li>
          </ul>

        </div>
      </div>
      <div className="h-[450px] w-[500px] ml-[-30px]">
        <video src="video_homepage.mp4" height="450px" width="500px" loop muted autoPlay></video>
      </div>
    </div>
  )
}

export default Featured