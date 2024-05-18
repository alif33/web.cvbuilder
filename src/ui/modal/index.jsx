import ReactModal from "react-modal"
import { RxCross2 } from "../../icons"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid #000'
    },
}

export default function Modal({isOpen, setIsOpen, children}){
    return(
        <ReactModal
            isOpen={isOpen}
            onRequestClose={()=>setIsOpen(null)}
            style={customStyles}
            contentLabel="Update modal"
            ariaHideApp={false}
        >
            <div className="relative w-[750px]">
                <div className="absolute -top-1 right-0">
                    <span onClick={()=>setIsOpen(false)} className="cursor-pointer"><RxCross2 size={20}/></span>
                </div>
                {children}
            </div>
        </ReactModal>
    )
}