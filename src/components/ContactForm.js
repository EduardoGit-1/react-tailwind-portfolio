import {BsSendFill} from "react-icons/bs"

const ContactForm = ({postMError, loading, info, data, handleSubmitForm, handleSubmit, register, errors}) =>{

    return(
        <div className="w-full shadow-lg">
            <fieldset disabled = {`${postMError || loading || info || data ? 'disabled':''}`}>
            <form class="flex flex-col bg-slate-700 rounded-lg">
                <div className="rounded-xl bg-slate-700 mt-5 space-y-5 pt-2">
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Name</span>
                            <input name = "name"  
                            className = "w-full bg-slate-500 rounded-md px-4 py-2 outline-none shadow-lg text-base font-normal mt-2" 
                            placeholder="Insert your name" 
                            type="text"
                            {...register("name", { required: "Your name is required.", maxLength: {value:20, message:"The maximum character length is 20."}, minLength:{value:3, message:"The minimum character length is 3."}})}
                            />
                            {errors.name && <p className="text-red-500 ml-1 text-sm font-normal mt-2">{errors.name.message}</p>}
                        </label>
                    </div>
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Email</span>
                            <input
                            className = "w-full bg-slate-500 rounded-md px-4 py-2 outline-none shadow-lg text-base font-normal mt-2" 
                            placeholder="Insert your name" 
        
                            {...register("email", {required: "Please insert your email.", pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address."}})}
                            />
                            {errors.email && <p className="text-red-500 ml-1 text-sm font-normal mt-2">{errors.email.message}</p>}
                        </label>
                        
                    </div>
                    <div className="rounded-lg px-5 sm:px-10 flex flex-col">
                        <label className="text-lg md:text-xl font-semibold focus-within:-translate-y-2 transform transition">Your <span className="text-indigo-600 font-bold">Message</span>
                            <textarea rows={6} name = "message" 
                            className = "w-full bg-slate-500 rounded-md px-4 pt-3 outline-none shadow-lg text-base font-normal mt-2" 
                            placeholder="Type your message" 
                            type="text"
                            {...register("message", { required: "Please insert a message.", minLength:{value:10, message: "The minimum character length is 10."}})}
                            ></textarea>
                           {errors.message && <p className="text-red-500 ml-1 text-sm font-normal mt-1">{errors.message.message}</p>}
                        </label>
          
                    </div>
                </div>
                <div className="md:self-end self-center md:mr-10 pb-5">
                    <button
                    onClick={handleSubmit((formData) =>handleSubmitForm(formData))}
      
                    className="bg-indigo-600 rounded-lg p-2 w-40 flex flex-row items-center justify-center space-x-2 mt-2 active:bg-indigo-500">
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