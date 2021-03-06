import cache from 'memory-cache'
import axios from "axios";


/**
 * youtube 粉丝获取接口
 * @type {string}
 * @private
 */
const PART = 'statistics'
const USER_ID = 'UCezfmwKc2B8dtVIAgRHXrKQ'
const CACHE_KEY = 'funs-ytb'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${process.env.YTB_KEY}&part=${PART}&id=${USER_ID}`)
            data = {...response.data, code: 0}
            //缓存 5 分钟
            cache.put(CACHE_KEY, data, 1000 * 60 * 5)
            console.log("=======>刷新缓存: " + CACHE_KEY)
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        console.error('ytb 接口异常')
        console.error(e)
        res.status(500).end()
    }
}
