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
            // Calling the default core action
            const {data, meta} = await super.find(ctx);

            // some more custom logic
            meta.date = Date.now()
            return {data, meta};
        },
        async associateWithOwner(ctx) {
            const {documentId} = ctx.params;
            console.log({documentId})

            if (!documentId) {
                return ctx.send(
                    {
                        message: 'Document Id and Owner Id are required'
                    })
            }
            try {
                const todo = await strapi.documents('api::to-do.to-do').findOne({
                    documentId,
                    populate: ['todo_owner']
                });

                console.log({todo})
                if (!todo) {
                    return ctx.notFound('Todo not found');
                }

                return ctx.send(todo);
            } catch (error) {
                return ctx.badRequest(error.message);
            }
        }
    }
));
