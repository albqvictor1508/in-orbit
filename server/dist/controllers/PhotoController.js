"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _AlunoModel = require('../models/AlunoModel');
var _PhotoModel = require('../models/PhotoModel');

const upload = _multer2.default.call(void 0, _multerConfig2.default).single("photo");

class PhotoController {
	store(req, res) {
		return upload(req, res, async (error) => {
			try {
				if (error) {
					return res.status(400).json({
						errors: [error.code],
					});
				}

				if (!req.file) {
					return res.status(404).json({
						errors: ["File not provided"],
					});
				}

				const { originalname, filename } = req.file;
				const { student_id } = req.body;

				if (!student_id) {
					return res.json(404).json({
						errors: ["Student ID not provided"],
					});
				}

				const studentExist = await _AlunoModel.Aluno.findByPk(student_id);
				if (!studentExist) {
					return res.status(404).json({
						errors: ["Student not exist"],
					});
				}

				const photo = await _PhotoModel.Photo.create({
					originalname,
					filename,
					student_id,
				});

				return res.json(photo);
			} catch (e) {
				return res.status(500).json({
					errors: ["Internal error, please check the logs"],
				});
			}
		});
	}
}

exports. default = new PhotoController();
