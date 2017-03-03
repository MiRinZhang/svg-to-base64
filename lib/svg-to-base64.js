module.exports = function (content) {
    // enable cache
    this.cacheable && this.cacheable();
    return `module.exports = ` + JSON.stringify("data:image/svg+xml;base64," + content.toString('base64'));
};
module.exports.raw = true;
