var isNode = typeof window === 'undefined'

describe('Cape Tests', function() {
  if (isNode) {
    global.jsdom = require('jsdom').jsdom
    global.document  = jsdom('<html><body></body></html>')
    global.window    = document.defaultView
    global.navigator = window.navigator

    global.virtualDom = require('virtual-dom')
    global.Inflector = require('inflected')
    global.expect = require('expect.js')
    global.sinon = require('sinon')

    global.Cape = require('../lib/cape/utilities.js')
    require('../lib/cape/markup_builder.js')
    require('../lib/cape/component.js')
    require('../lib/cape/data_store.js')
    require('../lib/cape/routing_mapper.js')
    require('../lib/cape/router.js')

    require('./spec/utilities_test.js')
    require('./spec/component_test.js')
    require('./spec/markup_builder_test.js')
    require('./spec/routing_mapper_test.js')
    require('./spec/router_test.js')
  } else {
    mocha.run()
  }
})
