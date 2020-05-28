import React, { Component } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function CustomToast({ closeToast }) {
    return (
        <div>
            Something Went Wrong
            <button onClick={closeToast}>Close</button>
        </div>
    )
}


toast.configure()

export class Toast extends Component {
    notify = () => {
        toast('Basic Notification', { position: toast.POSITION.TOP_LEFT });

        toast.success('Success Notification', { position: toast.POSITION.TOP_CENTER, autoClose: 8000 });
        toast.info('Information Notification', { position: toast.POSITION.BOTTOM_CENTER });
        toast.warn('Warning Notification', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
        toast.error(<CustomToast></CustomToast>, { position: toast.POSITION.BOTTOM_LEFT });
        toast('Basic Notification', { position: toast.POSITION.BOTTOM_RIGHT });
    }
    render() {
        return (
            <div>
                <button onClick={this.notify}>Notify</button>
            </div>
        )
    }
}

export default Toast
