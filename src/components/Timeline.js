import timelineData from "../context/data/timelineData"

const Timeline = () =>{
   
    return (
        <div class="relative mx-auto flex flex-col space-y-8 w-10/12 md:px-6">
            <div className='w-full flex flex-col justify-center items-center pb-10'>
                <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider opacity-50">A time perspective</p>
                <h1 className='text-4xl text-indigo-500 font-bold md:text-5xl text-center'>Education and Experience.</h1>
            </div>
   
            <div
                class="absolute z-0 w-2 h-[92%] xs:h-[85%] bg-indigo-600 shadow-md inset-0 left-11 top-[6.5rem] sm:top-[5rem] rounded-md md:mx-auto md:right-0 md:left-0"
            ></div>
            {
                timelineData.map((data, index) =>(
                    <div class="group relative z-10">
                        <div className="pb-1 xs:pb-0">
                            <img
                                src={data.img}
                                alt=""
                                class="timeline-img"
                            />
                        </div>
                        <div class={`timeline-container ${index % 2 !== 0 ? 'timeline-container-left': ''}`}>
                            <div class={`timeline-pointer ${index % 2 !== 0 ? 'timeline-pointer-left': ''}`} aria-hidden="true"></div>
                            <div class="bg-slate-800 p-6 rounded-lg shadow-md group-hover:bg-slate-700 group-hover:translate-x-2 xs:group-hover:translate-x-0 xs:group-hover:-translate-y-2 transform transition">
                                <span class="font-bold text-indigo-600 text-sm tracking-wide">{data.timeInterval}</span>
                                <h1 class="text-2xl font-bold pt-1">
                                    {data.title}
                                </h1>
                                <h1 class="text-xs md:text-sm font-bold pt-1 text-gray-400">
                                    {data.subTitle}
                                </h1>
                                <ul className="pt-5 space-y-1 list-disc ml-5">
                                    {
                                        data.list.map((item)=>(
                                            <li className="text-gray-300">{item}</li>
                                        ))
                                    }
                                </ul>
                    
                            </div>
                        </div>
                    </div>
                ))
            }
        
        </div>
    )
}

export default Timeline