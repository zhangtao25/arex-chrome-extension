import axios from 'axios'
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    const {url,config} = req.payload
    axios(url,config).then(r=>{
        sendResponse(r)
    }).catch(err=>{
        sendResponse({msg:'err'})
    })
    return true
})
