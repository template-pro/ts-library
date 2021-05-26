const globalJsdom = require('jsdom-global')
globalJsdom('', { url: 'https://github.com/wxh16144' })

import * as utils from '../src'

console.log(`1+1=${utils.add(1, 1)}`)

console.log(`current link: ${utils.url()}`)
