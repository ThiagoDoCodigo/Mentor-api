import sequelize from "./database";
import { User } from "../modules/users/users.model";

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco estabelecida com sucesso!");

    await User.sync({ alter: true });

    console.log("Tabelas criadas/alinhadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar o banco:", error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
