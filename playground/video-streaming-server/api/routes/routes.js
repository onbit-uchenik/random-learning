'use strict';


const videoStreamController = require('../controllers/video-stream');

module.exports = function registerRoutes (instance, options, done) {
    instance.get('/video', videoStreamController);
    done();
};
