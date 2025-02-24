'use strict';

/**
 * translate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::translate.translate');
