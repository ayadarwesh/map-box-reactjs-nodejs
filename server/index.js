const {users, polygons} = require('./data.json');
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/api/login", (req, res) => {
    const {email, password} = req.body;
    try {
        if (searchUser(email, password)) {
            res.status(200).json({
                status: 'success',
                message: 'You have successfully logged in.',
            });
        } else {
            return res.status(401).json({
                status: 'failed',
                message:
                    'Invalid email or password. Please try again with the correct credentials.',
            });
        }
    } catch {
        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Internal Server Error',
        });
    }

});

app.get("/api/users", (req, res) => {
    res.json({users});
});

app.get("/api/polygons", (req, res) => {
    res.json({polygons});
});

function searchUser(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }
}


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
