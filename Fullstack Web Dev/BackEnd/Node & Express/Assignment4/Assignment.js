const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());


// 1- Create an API that adds a new user to your users stored in a JSON file.
app.post('/user', async(req, res) => {
    try{
        const data = fs.readFileSync("./users.json", "utf-8"); 
        const users = JSON.parse(data); 
        const { name, age, email } = req.body;
        const userExist = users.find((user) => user.email === email); 
        if (userExist) { 
            return res.status(409).send("Email already exists"); 
        }
        const userObj = {
            name, 
            age,
            email
        }
        users.push(userObj);
        fs.writeFileSync("./users.json", JSON.stringify(users));
        return res.status(201).send("User added successfully");
    }
    catch (error) { 
        console.log(error); 
        return res.status(500).send("Something went wrong"); 
    }
})

// 2- Create an API that updates an existing user's name, age, or email by their ID. The userID should be retrieved from the params.
app.patch('/user/:id', async(req, res) =>{
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        const userID = Number(req.params.id);
        const user = users[userID - 1];

        if (!user) {
            return res.status(404).send("User not found");
        }

        const { name, age, email } = req.body;

        if (name !== undefined) {
            user.name = name;
        }

        if (age !== undefined) {
            user.age = age;
        }

        if (email !== undefined) {
            user.email = email;
        }

        fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

        return res.status(200).json({
            message: "User updated successfully",
            user
        });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
});

// 3- Create an API that deletes a user by ID. The userID should be retrieved from either the request body or optional params.
app.delete("/user/:id", (req, res) => {
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        const userID = Number(req.params.id);
        const index = userID - 1;

        if (!users[index]) {
            return res.status(404).send("User not found");
        }

        users.splice(index, 1);

        fs.writeFileSync(
            "./users.json",
            JSON.stringify(users, null, 2)
        );

        return res.status(200).send("User deleted successfully");

    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// 4- Create an API that gets a user by their name. The name will be provided as a query parameter.
app.get("/user/getByName", (req, res) => {
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        const { name } = req.query;

        const user = users.find(user => user.name === name);

        if (!user) {
            return res.status(404).json({
                message: "User name not found."
            });
        }

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// 5- Create an API that gets all users from the JSON file.
app.get("/user", (req, res) => {
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// 6-  Create an API that filters users by minimum age.
app.get("/user/filter", (req, res) => {
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        const minAge = Number(req.query.minAge);

        const filteredUsers = users.filter(user => user.age >= minAge);

        if (filteredUsers.length === 0) {
            return res.status(404).json({
                message: "no user found"
            });
        }

        return res.status(200).json(filteredUsers);

    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// 7- Create an API that gets User by ID.
app.get("/user/:id", (req, res) => {
    try {
        const data = fs.readFileSync("./users.json", "utf-8");
        const users = JSON.parse(data);

        const userID = Number(req.params.id);

        if (userID < 1 || userID > users.length) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        const user = users[userID - 1];

        return res.status(200).json({
            id: userID,
            ...user
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
});


app.listen(3000, () => { 
    console.log("Server running on port 3000"); 
});

// Postman collection link: https://documenter.getpostman.com/view/38377101/2sBY4VLdDL#115467a5-56c4-4d1b-87a3-f8b803ad3a16
