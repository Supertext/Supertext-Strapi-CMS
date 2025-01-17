'use strict';

/**
 * plain-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plain-language.plain-language');
