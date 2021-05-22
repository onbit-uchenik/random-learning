const addShow = require('./api/add-show');

module.exports = async function routes (fastify, options) {
    fastify.route(addShow);
}