
import axios from 'axios';
const KEY = "AIzaSyDEU6PkLosYjg-PVFP4jBY-GsEURvjBxDg";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }

});