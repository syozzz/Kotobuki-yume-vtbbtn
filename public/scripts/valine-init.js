if (!window._com_el) {
    init()
} else {
    console.log(window._com_el)
    var target = document.getElementById('comment-box')
    target.removeChild(target.firstChild)
    target.append(window._com_el.el)
}

function init() {
    window._com_el = new MiniValine({
        el: '.kycomment',
        appId: 'mlc9yl6iNeBmrHbMpfnDJzii-gzGzoHsz',
        appKey: '8pt23DVVPowhoO1ruMlkKyGS',
        placeholder: 'Write a Comment O(∩_∩)O~~'
    })
}