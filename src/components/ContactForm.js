import {BsSendFill} from "react-icons/bs"

const ContactForm = ({error, loading, info, data, handleSubmit, handleFormChange}) =>{
    return(
        <div className="w-full shadow-lg">
            <fieldset disabled = {`${error || loading || info || data ? 'disabled':''}`}>
            <form class="flex flex-col bg-slate-700 rounded-lg">
                <div className="rounded-xl bg-slate-700 mt-5 space-y-7 pt-2">
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col space-y-2">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Name</span>
                            <input name = "name"  onChange = {handleFormChange} className = "w-full bg-slate-500 rounded-md px-4 py-2 outline-none shadow-lg text-base font-normal mt-2" placeholder="Insert your name" type="text"/>
                        </label> 
                    </div>
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col space-y-2">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Email</span>
                            <input name = "email"  onChange = {handleFormChange} className = "w-full bg-slate-500 rounded-md px-4 py-2 outline-none shadow-lg text-base font-normal mt-2" placeholder="Insert your name" type="text"/>
                        </label> 
                    </div>
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col space-y-2">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Message</span>
                            <textarea rows={6} name = "message" onChange = {handleFormChange} className = "w-full bg-slate-500 rounded-md px-4 pt-3 outline-none shadow-lg text-base font-normal mt-2" placeholder="Type your message" type="text"></textarea>
                        </label>
                        
                    </div>
                </div>
                <div className="md:self-end self-center md:mr-10 pb-5">
                    <button onClick = {handleSubmit} className="bg-indigo-600 rounded-lg p-2 w-40 flex flex-row items-center justify-center space-x-2">
                        <h1 className="text-xl font-bold">Send</h1>
                        <BsSendFill size={20}/>
                    </button>
                </div>
            </form>
            </fieldset>
    </div>
    )
}

export default ContactForm