import multer from "multer";
import multerConfig from "../config/multerConfig";

import { Aluno } from "../models/AlunoModel";
import { Photo } from "../models/PhotoModel";

const upload = multer(multerConfig).single("photo");

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

				const studentExist = await Aluno.findByPk(student_id);
				if (!studentExist) {
					return res.status(404).json({
						errors: ["Student not exist"],
					});
				}

				const photo = await Photo.create({
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

export default new PhotoController();
