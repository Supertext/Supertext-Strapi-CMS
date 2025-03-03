'use strict';

/**
 * language-pair service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::language-pair.language-pair');
