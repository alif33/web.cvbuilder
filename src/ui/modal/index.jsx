import ReactModal from "react-modal"
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
            {children}
        </ReactModal>
    )
}