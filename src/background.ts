import axios from 'redaxios';
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    const payload = req.payload
    axios(payload).then(r=> {
        sendResponse(r)
    }).catch(err=>{
        sendResponse(err)
    })
    return true
})
