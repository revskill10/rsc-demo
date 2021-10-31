/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
    react: true,
    scalarTypes: { DateTime: "string" },
    introspection: {
        endpoint: "https://divine-mallard-50.hasura.app/v1/graphql",
        headers: {
            'x-hasura-admin-secret': 'K5ycCl3ivgvGG41lR3qYaSMj7rmAK6Z2uSIZZonzJfeoXqterbjHwT0vRZp0ay7F'
        },
    },
    destination: "./src/gqty/index.ts",
    subscriptions: false,
    javascriptOutput: false,
};

module.exports = config;