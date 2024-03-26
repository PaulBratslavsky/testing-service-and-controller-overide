"use strict";

/**
 * fixture service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::fixture.fixture", ({ strapi }) => ({
  async find(...args) {
    console.log("hit me!");
    const { results, pagination } = await super.find(...args);
    return { results, pagination };
  },
}));
