import axios from 'axios';

const KEY = 'AIzaSyCB0urK_00ZXiAoNBjsHgWvD5tjrx7qG9E';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    }
})