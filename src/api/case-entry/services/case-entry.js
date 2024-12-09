'use strict';

/**
 * case-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::case-entry.case-entry');
