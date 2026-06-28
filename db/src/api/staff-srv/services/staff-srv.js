'use strict';

/**
 * staff-srv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staff-srv.staff-srv');
