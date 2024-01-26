// style
import "./Modal.css"
import ReactDOM from 'react-dom'

function Modal({ children, closeModal, isModeModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
            border: '4px solid',
            borderColor: isModeModal ? 'yellowgreen' : 'red',
            textAlign: 'center'
          }}>
           { children }
           <br />
           <button onClick={closeModal}>Close</button>
        </div>
    </div>
  ), document.body)
}

export default Modal