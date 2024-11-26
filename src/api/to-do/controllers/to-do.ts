/**
 * to-do controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::to-do.to-do', ({strapi}) => (
    {
        async customApi(ctx) {
            try {
                ctx.body = 'hi'
            } catch (e) {
                ctx.body = 'error'
            }
        },
        // @override
        async find(ctx) {
            return {
                data: 'hi'
            }
        }
    }
));
