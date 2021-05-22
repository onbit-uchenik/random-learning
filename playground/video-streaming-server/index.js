'use strict';

const fastify = require('fastify')({
        logger: true
    }),
    routes = require('./api/routes/routes'),
    fastifyStatic = require('fastify-static'),
    path = require('path'),

    PORT = 3658;

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static')
});

fastify.register(routes);

fastify.listen(PORT, function onListen (err) {
    if (err) {
        fastify.log.error(err);
    }
});
