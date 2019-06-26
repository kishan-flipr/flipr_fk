const defaultState = {
id:'',
name:'',
email:'',
contactno:'',
isverified:'',
MID : '',
ORDER_ID: '',
CUST_ID: '',
INDUSTRY_TYPE_ID: '',
WEBSITE: '',
CHANNEL_ID: '',
TXN_AMOUNT: '',
CALLBACK_URL: '',
CHECKSUMHASH: '',
courseDetail:[],
courseid: '',
coursename: '',
duration: '',
price: '',
customerid: '',
courselist: '',
count:'',
};

export default function(state=defaultState, action) {
  switch(action.type) {
    case 'loginInfo':
      return {
        ...state,
        id:action.value.id,
        name:action.value.name,
        email:action.value.email,
        isverified:action.value.isverified
      };
      case 'paymentInfo':
        return {
          ...state,
          MID:action.value.MID,
          ORDER_ID:action.value.ORDER_ID,
          CUST_ID:action.value.CUST_ID,
          INDUSTRY_TYPE_ID:action.value.INDUSTRY_TYPE_ID,
          WEBSITE:action.value.WEBSITE,
          CHANNEL_ID:action.value.CHANNEL_ID,
          TXN_AMOUNT:action.value.TXN_AMOUNT,
          CALLBACK_URL:action.value.CALLBACK_URL,
          CHECKSUMHASH:action.value.CHECKSUMHASH,
        };
    case 'signupInfo':
    return {
        ...state,
        isverified:action.value.isverified,
        id:action.value.id,
        name:action.value.name,
        email:action.value.email,
        password:action.value.password,
        contactno:action.value.contactno
    };
    case 'addCartInfo':
    return {
        ...state,
        id:action.value.id,
        courseid:action.value.courseid,
        coursename:action.value.coursename,
        duration:action.value.duration,
        price:action.value.price,
        customerid:action.value.customerid,
        count:action.value.count,
    };

    case 'setPasswordInfo':
    return {
        ...state,
        id:action.value.id,
        name:action.value.name,
        email:action.value.email,
    };
    case 'courseInfo':
    return {
        ...state,
        courseid:action.value.courseid,
        courselist:action.value.courselist,
        coursename:action.value.coursename,
        duration:action.value.duration,
        price:action.value.price
    };
    case 'courseDetailInfo':
    return {
      ...state,
      courseDetail:action.value.courseDetail,
    };
    case 'logoutInfo':
    console.log("output:logout")
    return defaultState;
    default:
      return defaultState;
  }
}
