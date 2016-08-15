![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](https://www.npmjs.com/package/seneca) logger for Logentries

# logentries-seneca-logger
[![Npm][BadgeNpm]][Npm]
[![NpmFigs][BadgeNpmFigs]][Npm]
[![Travis][BadgeTravis]][Travis]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![Gitter][BadgeGitter]][Gitter]

- __Lead Maintainer__: [David Gonzalez](https://github.com/dgonzalez)
- __Sponsor__: [nearForm](http://www.nearform.com)
- __node__: 4.x, 5.x, 6.x

This module is a plugin that enables your Seneca-based microservice to send logs
to Logentries.

## Getting Started

Here is an example on how to use the logger:
```
var Seneca = require('seneca')
var seneca = Seneca({legacy: {logging: false}, 'logentries-logger': {token: <your-token>}})
seneca.use(require('seneca-logentries-logger'))
```

And that's all! From now on, all the Seneca log output will be sent to the Logentries
log configured to the specified token.

## Configuration

In order to configure the logger there is a number of configuration parameters that
can be passed into Seneca in the key 'logentries-logger'. The parameters will
be passed straight away into the Logentries.

seneca-logentries-logger will default the values for `levels` (if not specified)
to match the naming convention for used for seneca on the log levels. However,
if you specify the attribute values, seneca-logentries-logger will respect
your configuration.

The configuration is based on the [le_node client](https://github.com/rapid7/le_node#options).

The only required attribute is `token` as shown in the above example.

## Compatibility

Seneca-logentries-logger is only compatible with Seneca 3.0+ and Node 4.x+

## Contributing

The [Senecajs org](https://www.npmjs.com/package/seneca) encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License

Copyright (c) 2016, David Gonzalez and other contributors.
Licensed under [MIT](LICENSE).
