import axios from 'axios'
import cache from 'memory-cache'

const CACHE_KEY = 'video-bili'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get('https://api.bilibili.com/x/space/arc/search?mid=442426299&pn=1&ps=3')
            if (response.data.hasOwnProperty('code') && response.data.code === 0) {
                data = response.data
                //缓存 5 分钟
                cache.put(CACHE_KEY, data, 1000 * 60 * 5)
                console.log("=======>刷新缓存: " + CACHE_KEY)
            }
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        console.error('bili video 接口异常')
        console.error(e)
        res.status(500).end()
    }
}