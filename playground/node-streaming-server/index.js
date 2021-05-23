'use strict';

const  path = require('path'),
    fastify = require('fastify')({
        logger: {
            level: 'info',
            file: path.join(__dirname, '/.log/out.log')
        }
    }),
    routes = require('./api/routes/routes'),
    fastifyStatic = require('fastify-static'),

    PORT = 3658;

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static')
});

fastify.register(routes);

fastify.listen(PORT, '0.0.0.0', function onListen (err) {
    if (err) {
        fastify.log.error(err);
    }
});
