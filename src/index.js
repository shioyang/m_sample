
var m = require("mithril");

var root = document.body;

m.render(root, m("div", [
    m("h1", { class: "title" }, "Mithril Sample"),
    m("div", { class: "main" }, [
        m("button", {}, "Click")
    ])
]));
