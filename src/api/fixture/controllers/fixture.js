"use strict";

/**
 * fixture controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::fixture.fixture", ({ strapi }) => ({
  async find(ctx) {
    // your custom logic for modifying the input
    ctx.query = { ...ctx.query, locale: "en" }; // force ctx.query.locale to 'en' regardless of what was requested

    // Call the default parent controller action
    const result = await super.find(ctx);
    return result;
  },
}));
