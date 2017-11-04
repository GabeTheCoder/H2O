
class Api {

    constructor() {
        this.rootUrl = 'http://localhost:3000/api'
        this.defaultHeaders = { 'Content-Type': 'application/json' }
    }

    request = (attrs, completion) => {
        const requestUrl = this.rootUrl + attrs.path || ''
        const requestHeaders = attrs.headers || this.defaultHeaders

        if (attrs.Authorization) {
            requestHeaders.Authorization = attrs.Authorization
        }

        const requestParams = {
            method: attrs.method || 'GET',
            authorization: attrs.authorization || '',
            params: attrs.params || { }
        }

        const httpRequest = new XMLHttpRequest()

        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState != 4) return
            
            if (httpRequest.status != 200) {
                completion(httpRequest.responseText, null)
            } else {
                const jsonResponse = JSON.parse(httpRequest.responseText)
                completion(null, jsonResponse)
            }
        }

        httpRequest.open(requestParams.method, requestUrl, true)

        for (let key in requestHeaders) {
            const headerValue = requestHeaders[key]
            httpRequest.setRequestHeader(key, headerValue)
        }
        
        const paramString = JSON.stringify(requestParams.params)
        httpRequest.send(paramString)
    }

}

export default new Api()
