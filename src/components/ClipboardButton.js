import {BsFillClipboardCheckFill, BsFillClipboardFill} from "react-icons/bs"
const ClipboardButton = ({activeClipboard, clipBoardValue, copyButton}) =>{
    console.log(activeClipboard, clipBoardValue, copyButton)
    if (copyButton) {
        return (
            <div className=" bg-indigo-600 w-10 h-10 xs:h-12 xs:w-12 flex items-center justify-center rounded-lg ">
                {
                    activeClipboard === clipBoardValue ? <BsFillClipboardCheckFill className="h-6 w-6"/> : <BsFillClipboardFill className="h-6 w-6"/>
                }
               
            </div>
        )
    }
    return(
        <div className=" w-10 h-10 xs:h-12 xs:w-12 flex items-center justify-center rounded-lg "></div>
    )

}

export default ClipboardButton