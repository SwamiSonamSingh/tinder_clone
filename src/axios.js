import axios from "axios"
const instance=axios.create({
    baseURL:" https://tinder-backend7654.herokuapp.com"
})
export default instance;