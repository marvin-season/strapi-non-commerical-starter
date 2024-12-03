/**
 * to-do service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::to-do.to-do",
  ({ strapi }) => ({
    async associateWithOwner(documentId: string) {
      return await strapi.documents("api::to-do.to-do").findOne({
        documentId,
        populate: ["todo_owner"],
      });
    },
    async searchByName(name: string) {
      return strapi.documents("api::to-do.to-do").findMany({
        filters: {
          name: {
            $containsi: name,
          },
        },
      });
    },
  }),
);
