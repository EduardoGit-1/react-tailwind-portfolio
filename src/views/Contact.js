import contactInfo from "../constants/contactInfo";
import {BsSendFill} from "react-icons/bs"
const Contact = () => {
  return (
    <section id ="contact" className='w-full flex flex-col items-center justify-center'>
        <div className='my-10 md:flex flex-col space-y-20 md:my-20 w-10/12'>
            <div className='pt-5 '>
                <div className=''>
                    <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider opacity-50">Feel Free to contact</p>
                    <h1 className='text-4xl text-indigo-500 font-bold md:text-5xl'>Contact.</h1>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[70%] items-center justify-center shadow-lg bg-slate-800 p-10 rounded-lg lg:flex-row md:gap-x-10 min-w-[85%]">
            <div className="flex flex-col gap-5 w-full md:w-[80%] lg:mr-16 sm:mr-0 mb-10 ">
                {/*flex flex-row sm:flex-col w-[70%] items-center justify-around rounded-lg shadow-lg bg-slate-800 p-10 */}
                {/* flex flex-col  */}
                {contactInfo.map((contact) => (
                <div className="bg-slate-700 w-full rounded-lg px-1 py-4 sm:px-5 flex flex-row items-center space-x-5 cursor-pointer hover:bg-slate-600 hover:-translate-y-2 transform transition">
                    {contact.icon}
                    <div className="flex flex-col break-words">
                        <h1 className="text-base md:text-xl font-semibold">{contact.title}</h1>
                        <p className="text-xs md:text-base text-secondary">{contact.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="w-full">
                <form class="flex flex-col bg-slate-700 rounded-lg">
                    <div className="rounded-xl bg-slate-700 mt-5">
                        <div className="rounded-lg px-5 sm:px-10 py-5 flex flex-col">
                            <input className = "w-full bg-slate-500 rounded-md px-4 py-2 outline-none shadow-lg focus:-translate-y-2 transform transition" placeholder="Insert your name" type="text"/>
                        </div>
                        <div className="rounded-lg px-5 sm:px-10 py-5 flex flex-col">
                            <input className = "w-full bg-slate-500  rounded-md px-4 py-2 outline-none shadow-lg focus:-translate-y-2 transform transition" placeholder="Insert your email" type="email"/>
                        </div>
                        <div className="rounded-lg px-5 sm:px-10 py-5 flex flex-col">
                            <textarea className = "w-full bg-slate-500 rounded-md px-4 py-10 outline-none shadow-lg focus:-translate-y-2 transform transition" placeholder="Type your message" type="text"/>
                        </div>
                    </div>
                    <div className="md:self-end self-center md:mr-10 pb-5">
                        <button className="bg-indigo-600 rounded-lg p-2 lg:p-3 w-40 flex flex-row items-center justify-center space-x-2">
                            <h1 className="text-xl font-bold">Send</h1>
                            <BsSendFill size={20}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact