![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](http://senecajs.org) plugin

# @seneca/logentries-logger

[![npm version](https://img.shields.io/npm/v/seneca-logentries-logger.svg)](https://npmjs.com/package/seneca-logentries-logger)
[![build](https://github.com/senecajs/seneca-logentries-logger/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-logentries-logger/actions/workflows/build.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-logentries-logger/badge.svg)](https://snyk.io/test/github/senecajs/seneca-logentries-logger)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/seneca-logentries-logger/badge.svg?branch=master)](https://coveralls.io/github/senecajs/seneca-logentries-logger?branch=master)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```
npm install seneca-logentries-logger
```
## Quick Example

```
require('seneca')({
  legacy: { logging: false }
})
.use(require('seneca-logentries-logger'), {
  token: 'YOUR_LOGENTRIES_TOKEN'
})
```
## More Examples

See [test/](test/) for usage examples.

## Motivation

A Logentries logger for Seneca microservices. Sends structured log entries to the Logentries log management service.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-logentries-logger/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Configuration

In order to configure the logger there is a number of configuration parameters that
can be passed into Seneca in the key `logentries-logger`. The parameters will
be passed straight away into the Logentries.

seneca-logentries-logger will default the values for `levels` (if not specified)
to match the naming convention used for seneca on the log levels. However,
if you specify the attribute values, seneca-logentries-logger will respect
your configuration.

The configuration is based on the [le_node client](https://github.com/rapid7/le_node#options).

The only required attribute is `token` as shown in the above example.

## Contributing

The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```
npm run test
```
## Background

Compatible with [Logentries](https://logentries.com/) log management.

**Seneca compatibility:** Supports Seneca versions 2.x - 3.x.

**Original maintainer:** [David Gonzalez](https://github.com/dgonzalez). Originally sponsored by [nearForm](http://www.nearform.com/).

**Node.js:** Originally developed for Node.js 4.x/6.x. Current Node.js compatibility is defined in `package.json`.

[Senecajs org]: https://github.com/senecajs/
[Seneca.js]: https://www.npmjs.com/package/seneca
