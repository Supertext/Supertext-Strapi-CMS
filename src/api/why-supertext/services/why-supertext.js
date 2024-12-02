'use strict';

/**
 * why-supertext service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-supertext.why-supertext');
