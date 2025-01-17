'use strict';

/**
 * plain-language router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::plain-language.plain-language');
