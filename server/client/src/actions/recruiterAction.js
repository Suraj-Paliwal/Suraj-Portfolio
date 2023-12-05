import axios from 'axios';
import { toast } from 'react-toastify';

export const sendEmail = (data) => async dispatch => {
    dispatch({type : 'RECRUITER_SEND_EMAIL_REQUEST'})
    try {
        await axios.post('/api/recruiters/sendemail',data);
        dispatch({type : 'RECRUITER_SEND_EMAIL_SUCCESS'});
        toast.success("Message sent successfully.", {
            position: toast.POSITION.TOP_RIGHT
        });
    } catch (error) {
        dispatch({type : 'RECRUITER_SEND_EMAIL_FAIL',payload : error})
    }
};