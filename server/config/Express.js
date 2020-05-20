import express from "express";
import Path from "path";
import * as bodyParser from "body-parser";
import ServeWeb from "../helpers/ServeWeb";

const cookieParser = require("cookie-parser");

const init = async () => {
    const app = express();

    app.use("/static", express.static(Path.resolve(__dirname, "./../client-build")));
    app.use("/assets/", express.static(Path.resolve(__dirname, "./../assets")));
    app.use("/images/", express.static(Path.resolve(__dirname, "./../upload")));
    // app.use(express.static(Path.resolve(__dirname,"./../public")));
    app.use(bodyParser.json({}));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());


    app.get("/*", ServeWeb);
    app.get("*.js", (req, res, next) => {
        req.url += ".gz";
        res.set("Content-Encoding", "gzip");
        res.set("Content-Type", "text/javascript");
        next();
    });
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`App listening to ${PORT}....`);
        console.log("Press Ctrl+C to quit.");
    });
};

export default init;