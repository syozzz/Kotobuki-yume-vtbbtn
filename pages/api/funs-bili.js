import axios from 'axios'
import cache from 'memory-cache'

/**
 * 获取 bilibili 粉丝接口
 * 缓存时间为1分钟
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

const CACHE_KEY = 'funs-bili'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get('http://api.bilibili.com/x/relation/stat?vmid=442426299')
            if (response.data.hasOwnProperty('code') && response.data.code === 0) {
                data = response.data
                //缓存 1 分钟
                cache.put(CACHE_KEY, data, 1000 * 60)
                console.log("=======>刷新缓存: " + CACHE_KEY)
            }
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        console.error('bili funs 接口异常')
        console.error(e)
        res.status(500).end()
    }
}
