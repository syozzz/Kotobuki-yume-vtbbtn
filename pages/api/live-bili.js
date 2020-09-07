import axios from 'axios'
import cache from 'memory-cache'

/**
 * 获取 bilibili 直播状态 标题等接口
 * 缓存时间为5分钟
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

const CACHE_KEY = 'live-bili'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get('https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=442426299', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
                    'origin': 'https://space.bilibili.com',
                    'referer': 'https://space.bilibili.com/442426299'
                }
            })
            if (response.data.hasOwnProperty('code') && response.data.code === 0) {
                data = response.data
                //直播状态缓存 2 分钟
                cache.put(CACHE_KEY, data, 1000 * 60 * 2)
                console.log("=======>刷新缓存: " + CACHE_KEY)
            }
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        console.error('bili live 接口异常')
        console.error(e)
        res.status(500).end()
    }
}