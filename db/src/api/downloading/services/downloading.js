'use strict';

/**
 * downloading service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::downloading.downloading');
