export const sendEmailRecruiterReducer = (state={},action) => {
    switch(action.type){
        case 'RECRUITER_SEND_EMAIL_REQUEST' :
            return{
                loading : true
            }
        case 'RECRUITER_SEND_EMAIL_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'RECRUITER_SEND_EMAIL_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};