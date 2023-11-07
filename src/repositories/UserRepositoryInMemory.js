class UserRepositoryInMemory {
    constructor() {
        this.id = Math.floor(Math.random() * 1000) + 1
    }

    users = [];

    async create({ name, email, password }) {
        const user ={
            id: this.id,
            name,
            email,
            password
        }

        this.users.push(user);

        return user;
    }

    async update({ name, email, password, old_password }) {

        const updated = {
            user_id: this.id,
            name,
            email,
            password,
            old_password
        }

        this.users.push(updated);

        return updated;
    }

    async findUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    async findUserById(id) {
        return this.users.find(user => user.user_id === id);
    }
}

module.exports = UserRepositoryInMemory;