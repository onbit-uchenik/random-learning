const fastify = require("fastify")({
        logger:true
    }),
    EXIT_ERROR = 1,
    routes = require('./routes');

fastify.register(routes);

fastify.get("/", async (req, reply) => {
    return { msg: 'I am hearing you' };
});



fastify.listen(3658, function (err) {
    
    if (err){
        fastify.log.error(err);
        process.exit(EXIT_ERROR);
    }
});
