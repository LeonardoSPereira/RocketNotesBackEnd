const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("User Create Service", () => {
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    });
    
    it("create user", async () => {
        const user ={
           name: "User test",
           email: "test@test.com",
           password: "123" 
        }
    
        const userCreated = await userCreateService.executeCreateUser(user);
    
        expect(userCreated).toHaveProperty("id");
    });

    it("create user with email already exists", async () => {
        const user1 = {
            name: "User test 1",
            email: "test@test.com",
            password: "123" 
        }

        const user2 = {
            name: "User test 2",
            email: "test@test.com",
            password: "123" 
        }

        await userCreateService.executeCreateUser(user1);
        await expect(userCreateService.executeCreateUser(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso"));
    });

    it("Update user", async () => {
        const user = {
            name: "User test",
            email: "test@test.com",
            password: "123"
        }

        const updatedUser = {
            name: "User test updated",
            email: "updated@updated.com"
        }

        const userCreated = await userCreateService.executeCreateUser(user);
        const userUpdated = await userCreateService.executeUpdateUser(userCreated.id, updatedUser);
        

        expect(userUpdated).toHaveProperty("user_id");

    });


});
