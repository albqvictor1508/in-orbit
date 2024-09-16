require("dotenv").config();

module.exports = {
	dialect: "mariadb",
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "",
	define: {
		timestamps: true,
		underscored: true, //pra ficar nome_pessoa ao invés de cammel case (nomePessoa)
		underscoredAll: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
	dialectOptions: {
		timezone: "America/Sao_Paulo",
	},
	timezone: "America/Sao_Paulo",
};

//arquivo pra configurar o sequelize (ORM) parecido com o drizzle-kit da NLW
