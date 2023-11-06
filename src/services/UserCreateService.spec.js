const UserCreateService = require("./UserCreateService");

it("create user", async () => {
    const user ={
       name: "User test",
       email: "test@test.com",
       password: "123" 
    }

    const userCreateService = new UserCreateService();
    const userCreated = await userCreateService.executeCreateUser(user);

    expect(userCreated).toHaveProperty("id");
})