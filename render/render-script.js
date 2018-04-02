const con = require('consolidate')
const loaderUtils = require('loader-utils')
const fs = require('fs-extra')
const { resolve } = require('path')
const { transform } = require('babel-core')

module.exports = function (script, callback) {
    this.cacheable()

    const options = loaderUtils.getOptions(this)
    const fullPath = loaderUtils.interpolateName(this, `[path][name].happy`, options)
    const filename = loaderUtils.interpolateName(this, `[name].js`, options)
    const folder = loaderUtils.interpolateName(this, `[folder]`, options)
    const filePath = loaderUtils.interpolateName(this, `[path]`, options)

    let result = transform(script.content, {
        presets: [
            [
                'env', {
                    modules: false
                }
            ]
        ]
    })

    callback(null, result.code)
}