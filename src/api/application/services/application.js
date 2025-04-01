/**
 * application service
 */

const factories = require('@strapi/strapi').factories;

module.exports = factories.createCoreService('api::application.application');
