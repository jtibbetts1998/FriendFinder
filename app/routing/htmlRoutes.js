var path = require("path");

module.exports = function() {
    app.get("/:survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
};
