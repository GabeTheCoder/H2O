
export default (req, res, next) => {
    const isJavascript = req.url.endsWith('.js')
    const isProduction = process.env.NODE_ENV == 'production'

    if (isJavascript && isProduction) {
        req.url = req.url + '.gz'
        res.set('Content-Encoding', 'gzip')
    }
    
    next()
}
