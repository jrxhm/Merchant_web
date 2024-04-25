// Import necessary modules
import express, { Request, Response } from 'express';
import mysql from 'mysql';
import cors from 'cors';

// Create an instance of Express
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Create a connection to your MySQL database
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "mysqlDB",
    password: "",
    database: "accounts"
});

// Define route to handle sign-up requests
app.post('/signup', (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const INSERT_USER_QUERY = 'INSERT INTO users (USERNAME, EMAIL, PASSWORD) VALUES (?, ?, ?)';
    db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error signing up');
        } else {
            res.status(201).send('User signed up successfully');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});
