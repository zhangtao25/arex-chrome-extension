console.log('arex-chrome-extension加载成功')
window.addEventListener("message", (ev) => {
    if (ev.data.type === "__AREX_EXTENSION_REQUEST__"){
        chrome.runtime.sendMessage(ev.data, res => {
            window.postMessage(
                {
                    type: "__AREX_EXTENSION_RES__",
                    res,
                },
                "*"
            )
        })
    }
})
