'use strict'

var LELogger = require('le_node')

function Logger() {}

Logger.preload = function() {
  var seneca = this
  var options = seneca.options()
  var logentries = options['logentries-logger']
  if (logentries && !logentries.levels) {
    // Match the Seneca log levels:
    logentries.levels = { debug: 0, info: 1, warn: 2, error: 3, fatal: 4 }
  }

  var logger = new LELogger(logentries)

  function adapter(context, payload) {
    logger[payload.level](payload)
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger
