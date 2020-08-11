const axios = require('axios')

module.exports = (req, res) => {
    axios.get('api.bilibili.com/x/relation/stat?vmid=442426299')
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (err) {
            res.status(500)
        })
}