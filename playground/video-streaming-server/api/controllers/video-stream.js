'use strict';

// HTTP status codes
const HTTP_SUCCESS_CODE = 200,
    HTTP_BAD_REQUEST_CODE = 400;
    // videosPath = require('../../static');

module.exports = {
    schema: {
        headers: {
            type: 'object',
            properties: {
                range: {
                    type: 'string',
                    description: 'Range of bytes to send'
                }
            }
        }
    },

    /**
     * @param {Object} req - Fastify object for incoming request
     * @param {Object} reply  - Fastify object for outgoing response
     */
    handler (req, reply) {
        const { range } = req.headers;

        if (!range) {
            reply
                .code(HTTP_BAD_REQUEST_CODE)
                .send({ status: 'error', message: 'No range header found' });
        }


        reply.code(HTTP_SUCCESS_CODE).send({ message: 'send successfully' });
    }
};
