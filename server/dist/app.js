"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('./db/index');
var _nodepath = require('node:path');
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _TokenRoutes = require('./routes/TokenRoutes'); var _TokenRoutes2 = _interopRequireDefault(_TokenRoutes);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _HomeRoutes = require('./routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);
var _AlunoRoutes = require('./routes/AlunoRoutes'); var _AlunoRoutes2 = _interopRequireDefault(_AlunoRoutes);
var _PhotoRoutes = require('./routes/PhotoRoutes'); var _PhotoRoutes2 = _interopRequireDefault(_PhotoRoutes);

const whitelist = ["http://34.95.217.255:81/", "http://localhost:5173/"];

const corsOptions = {
	origin(origin, callback) {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			return callback(null, true);
		}

		return new Error("not allowed by CORS");
	},
};

class App {
	constructor() {
		this.app = _express2.default.call(void 0, );
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(_cors2.default.call(void 0, corsOptions));
		this.app.use(_helmet2.default.call(void 0, ));
		this.app.use(_express2.default.json());
		this.app.use(_express2.default.urlencoded({ extended: true }));
		this.app.use(
			"images/",
			_express2.default.static(_nodepath.resolve.call(void 0, __dirname, "uploads", "images")),
		);
	}

	routes() {
		this.app.use("/", _HomeRoutes2.default);
		this.app.use("/token", _TokenRoutes2.default);
		this.app.use("/user", _UserRoutes2.default);
		this.app.use("/student", _AlunoRoutes2.default);
		this.app.use("/photos/", _PhotoRoutes2.default);
	}
}

exports. default = new App().app;

console.log(123);
