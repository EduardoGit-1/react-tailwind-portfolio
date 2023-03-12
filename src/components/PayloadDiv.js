import {BsCheck} from "react-icons/bs"
import {AiOutlineInfo} from "react-icons/ai"
import {ImCross} from "react-icons/im"
import { useEffect } from "react"

const PayloadDiv = ({error, info, data, handleModalClose, showModal}) =>{
    useEffect(() =>{ //conditional inline-css was not working for an unknown reason, had to do it this way...
        const bgClasses = ["bg-indigo-600", "bg-blue-500", "bg-rose-500"]
        let modalIconContainer = document.getElementById("modalIconContainer")
        let modalMessage = document.getElementById("modalMessage")
        let modalButton = document.getElementById("modalButton")
        modalButton.classList.remove(...bgClasses)
        modalIconContainer.classList.remove(...bgClasses)
        if (info){
            modalIconContainer.classList.add("bg-blue-500")
            modalButton.classList.add("bg-blue-500")
            modalMessage.innerText = "You already sent a message today!"
        }else if (error){
            modalIconContainer.classList.add("bg-rose-500")
            modalButton.classList.add("bg-rose-500")
            modalMessage.innerText = "An error has ocurred, please try again later!"
        }else{
            modalIconContainer.classList.add("bg-indigo-600")
            modalButton.classList.add("bg-indigo-600")
            modalMessage.innerText = "Message was sent! I'll get back to you shortly."
        }
    }, [error, info])
   
    return(
        <div className={`absolute flex flex-col items-center justify-around p-5 rounded-lg shadow-lg bg-slate-700 w-[80%] h-[45%] xs:w-[60%] xs:h-[40%] md:w-[50%] lg:w-[50%] lg:h-[60%] xl:w-[30%] 2xl:w-[20%] ${showModal ? '-translate-y-[10%]' : 'translate-y-[180%]'} transition-all ease-in-out duration-200`}>
            <div id = "modalIconContainer" className={`w-20 h-20 p-2 rounded-full flex items-center justify-center`}>
                {error ? <ImCross className="w-[70%] h-[70%]"/> : info ? <AiOutlineInfo className="w-[70%] h-[70%]"/> : <BsCheck className="w-[70%] h-[70%]"/>}
            </div>
            <div>
                <h1 id = "modalTitle" className={`text-5xl font-bold`}>
                    {
                        error ? "Error!":
                        info ? "Oops!":
                        "Success"
                    }
                </h1>
            </div>
            <div className="text-center">
                <p id="modalMessage" className="text-white text-lg">
                    {
                        error ? "An error has ocurred, please try again later!":
                        info ? "You already sent a message today!":
                        "Message was sent! I'll get back to you shortly."
                    }
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <button id="modalButton" onClick = {handleModalClose} className={`w-52 rounded-lg py-2 text-xl font-bold`}>Continue</button>
            </div>
        </div>
    )

}

export default PayloadDiv