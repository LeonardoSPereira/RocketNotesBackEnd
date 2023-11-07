const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async executeCreateUser({ name, email, password }) {

        const checkIfUserExists = await this.userRepository.findUserByEmail(email);

        if(checkIfUserExists) {
            throw new AppError("Este e-mail já está em uso");
        };

        const hashedPassword = await hash(password, 8);

        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword });
    
        return userCreated;
    }

    async executeUpdateUser({ name, email, password, old_password, user_id }) {

        const user = await this.userRepository.findUserById(user_id);
        
        if(!user) {
        throw new AppError("Usuário não encontrado")
        };

        const userWithUpdatedEmail = await this.userRepository.findUserByEmail(email);
        

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
        throw new AppError("Este e-mail já está em uso!")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
        throw new AppError("Você precisa informar a sua senha atual para poder atualizar a senha");
        }

        if(password && old_password) {
        const checkOldPassword = await compare(old_password, user.password);

        if(!checkOldPassword) {
            throw new AppError("A senha antiga não confere");
        }

        user.password = await hash(password, 8)
        }

        const userUpdated = this.userRepository.update({ name: user.name, email: user.email, password: user.password, user_id });

        return userUpdated;
    }


}

module.exports = UserCreateService;