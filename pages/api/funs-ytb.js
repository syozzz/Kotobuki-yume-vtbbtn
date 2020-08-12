import cache from 'memory-cache'
import axios from "axios";

const APP_KEY = 'AIzaSyAJyPFDKWHy4cVhklLkq7pwWlkkPnoXMw8'
const PART = 'statistics'
const USER_ID = 'UCezfmwKc2B8dtVIAgRHXrKQ'
const CACHE_KEY = 'funs-ytb'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${APP_KEY}&part=${PART}&id=${USER_ID}`)
            data = {...response.data, code: 0}
            //缓存 5 分钟
            cache.put(CACHE_KEY, data, 1000 * 60 * 5)
            console.log("=======>刷新缓存: " + CACHE_KEY)
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        res.status(500).end()
    }
}