export default {
    routes: [
        {
            method: 'GET',
            path: '/custom-route',
            handler: 'to-do.customApi',
            config: {
                auth: false
            }
        }
    ]
}