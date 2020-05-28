import React, { Component } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
export class ReactModal extends Component {
    // const[modalIsOpen, setModalIsOpen]  = useState(false);
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false
        }
    }

    OpenCloseModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.OpenCloseModal}>Open Modal</button>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.OpenCloseModal}
                    style={{
                        overlay: {
                            background: 'purple'
                        },
                        content: {
                            color: 'orange'
                        }
                    }}>
                    <h2>Modal Header</h2>
                    <p>Modal Body</p>
                </Modal>

            </div >
        )
    }
}

export default ReactModal
