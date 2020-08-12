import axios from 'axios'
import cache from 'memory-cache'

const CACHE_KEY = 'live-sr'

export default async (req, res) => {
    try {
        let data = cache.get(CACHE_KEY)
        if (!data) {
            const response = await axios.get('https://www.showroom-live.com/api/live/live_info?room_id=248103')
            data = response.data
            if (data.live_status === 1) {//1表示未直播 再次查询是否有预定直播
                const response1 = await axios.get('https://www.showroom-live.com/api/room/next_live?room_id=248103')
                if (response1.data.epoch) {
                    data.live_status = 3
                    data.next_live_time = response1.data.text
                }
            }
            data.code = 0
            //直播状态缓存 2 分钟
            cache.put(CACHE_KEY, data, 1000 * 60 * 2)
            console.log("=======>刷新缓存: " + CACHE_KEY)
        } else {
            console.log("=======>命中缓存: " + CACHE_KEY)
        }
        res.status(200).json(data || {code: 1})
    } catch (e) {
        res.status(500).end()
    }
}