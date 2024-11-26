export default {
    routes: [
        {
            method: 'GET',
            path: '/to-do/custom-route',
            handler: 'to-do.customApi',
            config: {
                auth: false
            }
        },
        {
            method: 'GET',
            path: '/to-do/find-with-owner',
            handler: 'to-do.associateWithOwner',
            config: {
                auth: false
            }
        }
    ]
}