module.exports = {
    stories: [
        "../src/atomic/**/*.stories.mdx",
        "../src/atomic/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
};
