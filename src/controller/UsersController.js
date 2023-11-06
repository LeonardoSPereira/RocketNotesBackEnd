const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");
class UsersController {

 /* Pode ter no máximo 5 métodos ou funções (caso necessário de mais métodos, criar um novo controller):
 - index: GET para listar vários registros (listar todos os usuários cadastrados);
 - show: GET para exibir um registro específico (listar dados de um usuário específico);
 - create: POST para criar um registro;
 - update: PUT para atualizar um registro;
 - delete: DELETE para remover um registro.
 */ 

  async create(request, response) {
    const { name, email, password } = request.body;
    
    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.executeCreateUser({ name, email, password });

    return response.status(201).json()
 }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.executeUpdateUser({ name, email, password, old_password, user_id });

    return response.json();
  }


}

module.exports = UsersController;