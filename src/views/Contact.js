import contactInfo from "../context/constants/contactInfo";
import ContactForm from "../components/ContactForm";
import ClipboardButton from "../components/ClipboardButton";
import { useState, useReducer} from "react";
import messageReducer from "../context/reducer/messageReducer";
import postMessage from "../context/actions/contact/postMessage";
import PayloadDiv from "../components/PayloadDiv";

const Contact = () => {
    const [activeClipboard, setActiveClipboard] = useState("")
    const [messageData, setMessageData] = useState({message:"", email:"", name:""})
    const [postMessageState, messageDispatch] = useReducer(messageReducer, {data: null, error: false, info:false, loading: false})
    const [showModal, setShowModal] = useState(false)
    const handleModalClose = () =>{
        setShowModal(!showModal)
        setTimeout(() =>{
            messageDispatch({
                type: "POST_MESSAGE_CLEAR",
                payload: {data: null, error: false, info:false, loading: false}
            })
        }, 150)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        postMessage(messageData, setShowModal)(messageDispatch)
    }
    const handleFormChange = (e) => {
        let key = e.target.name 
        setMessageData({...messageData, [key]: e.target.value,});
      };
    const handleContactInfoOnClick = (value) =>{
        navigator.clipboard.writeText(value)
        setActiveClipboard(value)
    }
    const handleOpenPageOnClick = (value) =>{
        window.open(value, '_blank')
    }
    const onClickFuncs = {"handleContactInfoOnClick" : handleContactInfoOnClick, "handleOpenPageOnClick": handleOpenPageOnClick}

    console.log(postMessageState)
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
            <div className="group relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className={`flex flex-col w-10/12 2xl:w-[60%] items-center justify-center shadow-lg bg-slate-800 p-10 rounded-lg lg:flex-row md:gap-x-10 transition-all ease-in-out ${postMessageState.error || postMessageState.loading || postMessageState.info || postMessageState.data? 'opacity-20' : ''}`}>
                    <div className="flex flex-col gap-5 w-full lg:w-[65%] lg:mr-16 sm:mr-0 mb-10 ">
                        {contactInfo.map((contact) => (
                            <div onClick={()=>onClickFuncs[contact.onClick](contact.value)} className="bg-slate-700 w-full rounded-lg px-5 py-4 flex flex-row items-center justify-between cursor-pointer hover:bg-slate-600 hover:-translate-y-2 transform transition shadow-lg">
                                <div className="flex flex-row items-center justify-center space-x-4">
                                    <div className="">
                                        {contact.icon}
                                    </div>
                                
                                    <div className="flex flex-col break-words">
                                        <h1 className="text-base md:text-xl font-semibold">{contact.title}</h1>
                                        <p className="text-xs md:text-sm text-secondary hidden xs:flex">{contact.description}</p>
                                    </div>
                                </div>
                                {<ClipboardButton activeClipboard={activeClipboard} clipBoardValue = {contact.value} copyButton = {contact.copyButton}/>}
                            </div>
                            
                        ))}
                    </div>
                    <ContactForm error={postMessageState.error} info={postMessageState.info} data={postMessageState.data} loading={postMessageState.loading} handleSubmit = {handleSubmit} handleFormChange= {handleFormChange} />
                </div>
                <PayloadDiv error={postMessageState.error} info={postMessageState.info} data={postMessageState.data} loading={postMessageState.loading} handleModalClose = {handleModalClose} showModal = {showModal}/>
            </div>
        </section>
    )
}

export default Contact