import dotenv from "dotenv";
dotenv.config();

export default {
	url: `http://localhost:${process.env.PORT}`,
};
