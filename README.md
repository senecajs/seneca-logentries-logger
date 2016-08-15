# Logentries Seneca Logger
This module is a plugin that enables your Seneca-based microservice to send logs
to Logentries.

# Getting Started

Here is an example on how to use the logger:
```
var Seneca = require('seneca')
var seneca = Seneca({legacy: {logging: false}, 'logentries-logger': {token: <your-token>}})
seneca.use(require('seneca-logentries-logger'))
```

And that's all! From now on, all the Seneca log output will be sent to the logentries
log configured to the specified token.

# Configuration

In order to configure the logger there is a number of configuration parameters that
can be passed into Seneca in the key 'logentries-logger'. The parameters will
be passed straight away into the Logentries.

seneca-logentries-logger will default the values for `levels` (if not specified)
to match the naming convention for used for seneca on the log levels. However,
if you specify the attribute values, seneca-logentries-logger will respect
your configuration.

The configuration is based on the [le_node client](https://github.com/rapid7/le_node#options).

The only required attribute is `token` as shown in the above example.

# Compatibility

Seneca-logentries-logger is only compatible with Seneca 3.0+ and Node 4.x+
