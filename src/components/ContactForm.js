import {BsSendFill} from "react-icons/bs"

const ContactForm = () =>{
    return(
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
                        <textarea className = "w-full bg-slate-500 rounded-md px-4 py-14 outline-none shadow-lg focus:-translate-y-2 transform transition" placeholder="Type your message" type="text"/>
                    </div>
                </div>
                <div className="md:self-end self-center md:mr-10 pb-5">
                    <button className="bg-indigo-600 rounded-lg p-2 w-40 flex flex-row items-center justify-center space-x-2">
                        <h1 className="text-xl font-bold">Send</h1>
                        <BsSendFill size={20}/>
                    </button>
                </div>
            </form>
    </div>
    )
}

export default ContactForm