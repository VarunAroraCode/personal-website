const express = require("express");
const app = express()

const port = 5000;

app.get('/api/user', (req, res) => {
    const user = [
        {
            id: 1,
            firstName: "Varun",
            lastName: "Arora"
        }
    ];
    res.json(user)
});

app.listen(port, () => console.log(`server started on port ${port}`));