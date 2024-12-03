'use strict';

/**
 * ai-translation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai-translation.ai-translation');
