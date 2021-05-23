'use strict';

const { stat } = require('fs');

const fs = require('fs'),
    path = require('path'),

    videoDir = path.join(__dirname, '../../static/videos'),
    MAX_CHUNK_SIZE = 500000; // 500 KB

module.exports = {
    schema: {
        headers: {
            type: 'object',
            properties: {
                range: {
                    type: 'string',
                    description: 'Range of bytes to send'
                }
            },
            required: ['range']
        }
    },

    /**
     * @param {Object} req - Fastify object for incoming request
     * @param {Object} reply  - Fastify object for outgoing response
     */
    handler (req, reply) {
        const requestRange = req.headers.range,
            { videoName } = req.params,
            videoPath = path.join(videoDir, `/${videoName}`);

        // eslint-disable-next-line security/detect-non-literal-fs-filename
        fs.promises.stat(videoPath)
            .then(function (stat) {
                return stat.size;
            })
            .then(function (videoSize) {
                // eslint-disable-next-line no-unused-vars
                const [type, range] = requestRange.split('=');

                let [start, end] = range.split('-')
                    .map((value) => parseInt(value, 10));

                if (!end) {
                    end = Math.min(start + MAX_CHUNK_SIZE, videoSize - 1);
                } else {
                    end = MATH.min(Math.min(end, start 
                        + MAX_CHUNK_SIZE),  videoSize - 1);
                }

                reply.raw.writeHead(206, {
                    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': `${end - start + 1}`,
                    'Content-Type': 'video/mp4'
                });
                
                const videoStream = fs.createReadStream(videoPath, { start, end });

                videoStream.pipe(reply.raw);

            })
            .catch(function (err) {
                req.log.error(err);
                reply
                    .code(500)
                    .send({ msg: 'Some internal server error.' +
                     'Please open issue at ' +
                     'https://github.com/onbit-syn/random-learning/issues' });
            });
    }
};