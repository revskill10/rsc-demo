module.exports = {
    experimental: {
        reactRoot: true,
        concurrentFeatures: true,
        serverComponents: true,
        outputFileTracing: true
    },
    async rewrites() {
        return [{
            source: '/api/auth',
            destination: '/api/auth',
            // Since the :first parameter is used in the destination the :second parameter
            // will not automatically be added in the query although we can manually add it
            // as shown above
        }, ]
    },
}