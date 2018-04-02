const loaderUtils = require('loader-utils')
const renderWxml = require('./render/render-wxml')
const renderWxss = require('./render/render-wxss')
const renderScript = require('./render/render-script')
const { parseComponent } = require('vue-template-compiler')

module.exports = function (content) {
    this.cacheable()
    var callback = this.async()

    const parts = parseComponent(content)
    if (parts.template) {
        renderWxml.call(this, parts.template)
    }
    if (parts.styles && parts.styles.length) {
        renderWxss.call(this, parts.styles[0])
    }
    if (parts.script) {
        renderScript.call(this, parts.script, callback)
    } else {
        callback(null, '')
    }
}

