import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || `https://gvrcrtaofa.execute-api.ap-south-1.amazonaws.com/production/api`
});
