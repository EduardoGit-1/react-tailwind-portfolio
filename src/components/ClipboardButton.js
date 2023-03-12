import {BsFillClipboardCheckFill, BsFillClipboardFill} from "react-icons/bs"
const ClipboardButton = ({activeClipboard, clipBoardValue, copyButton}) =>{

    if (copyButton) {
        return (
            <div className=" bg-indigo-600 w-10 h-10 xs:h-12 xs:w-12 flex items-center justify-center rounded-lg relative">
                {
                    activeClipboard === clipBoardValue ? <BsFillClipboardCheckFill className="h-6 w-6"/> : <BsFillClipboardFill className="h-6 w-6"/>
                }
               <div className={`absolute w-16 h-10 rounded-lg bg-indigo-600 left-[120%] flex justify-center items-center shadow-lg ${activeClipboard === clipBoardValue ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out` }>
                    <div className="absolute right-[70%] -z-50 w-5 h-5 bg-indigo-600 rotate-45">

                    </div>
                    <p className="text-sm font-semibold">Copied!</p>
               </div>
            </div>
        )
    }
    return(
        <div className=" w-10 h-10 xs:h-12 xs:w-12 flex items-center justify-center rounded-lg "></div>
    )

}

export default ClipboardButton