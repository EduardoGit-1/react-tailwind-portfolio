import timelineData from "../data/timelineData"

const Timeline = () =>{
   
    return (
        <div class="relative container mx-auto px-6 flex flex-col space-y-8 ">
            <div className='w-full flex flex-col justify-center items-center pb-10'>
                <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider opacity-50">A travel through time</p>
                <h1 className='text-4xl text-indigo-500 font-bold md:text-5xl text-center'>Education and Experience.</h1>
            </div>
            {/* <div
                class="absolute z-0 w-2 h-[79%] bg-indigo-600 shadow-md inset-0 left-17 sm:top-[5rem] md:h-[85%] xs:top-[7rem] top-[7rem] rounded-md md:mx-auto md:right-0 md:left-0"
            ></div> */}
            <div
                class="absolute z-0 w-2 h-[91%] xs:h-[85%] bg-indigo-600 shadow-md inset-0 left-17 top-[6.5rem] sm:top-[5rem] rounded-md md:mx-auto md:right-0 md:left-0"
            ></div>
            {
                timelineData.map((data, index) =>(
                    <div class="relative z-10">
                        <div className="pb-1 xs:pb-0">
                            <img
                                src={data.img}
                                alt=""
                                class="timeline-img"
                            />
                        </div>
                        <div class={`group timeline-container ${index % 2 !== 0 ? 'timeline-container-left': ''}`}>
                            <div class={`group-hover:bg-slate-700 timeline-pointer  ${index % 2 !== 0 ? 'timeline-pointer-left': ''}`} aria-hidden="true"></div>
                            <div class="bg-slate-800 p-6 rounded-lg shadow-md group-hover:bg-slate-700 hover:translate-x-2 xs:hover:translate-x-0 xs:hover:-translate-y-2 transform transition">
                                <span class="font-bold text-indigo-600 text-sm tracking-wide">{data.timeInterval}</span>
                                <h1 class="text-2xl font-bold pt-1">
                                    {data.title}
                                </h1>
                                <p class="pt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Ex iste suscipit reiciendis, perferendis vel
                                    consequuntur cupiditate ad commodi provident,
                                    sapiente veniam sed autem.
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        
        </div>
    )
}

export default Timeline