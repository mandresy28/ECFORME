import express from 'express';
import mysql from 'mysql';
import multer from 'multer';
import path from 'path';
import cors from 'cors';

import { fileURLToPath } from 'url';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecforme"
});

// Database Connection Error Handling
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});



// Registration
app.post('/register', (req, res) => {
    const { email, username, password } = req.body;

    // Validate input
    if (!email || !username || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Hash the password (use bcrypt or a similar library)
    const hashedPassword = hashPasswordFunction(password);

    const sqlAdmin = "INSERT INTO admin (`email`, `username`, `password`) VALUES (?, ?, ?)";
    const valuesAdmin = [email, username, hashedPassword];

    db.query(sqlAdmin, valuesAdmin, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ message: "Registration successful" });
    });
});
// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM admin WHERE `email` = ? AND `password` = ?";
    const values = [email, hashPasswordFunction(password)];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (data.length > 0) {
            const user = data[0];
            const isAdmin = user.isAdmin === 1; // Assuming isAdmin is a boolean in the database

            // Successful login - create and send authentication token if needed
            return res.json({ message: "Login successful", isAdmin });
        } else {
            return res.status(401).json({ error: "Authentication failed" });
        }
    });
});


// Routes for Products
app.get('/', (req, res) => {
    res.json("hello mf!!");
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({ storage: storage });
app.get('/products', (req, res) => {
    const q = "SELECT * FROM posts";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/products",(req, res) => {
    const q = "INSERT INTO posts (`title`,`description`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,  
    ];;

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("post has been created successfully");
    });
});

app.delete("/products/:id", (req, res) => {
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE id = ?";

    db.query(q, [postId], (err, data) => {
        if (err) return res.json(err);
        return res.json("post has been deleted successfully.");
    });
});

app.put("/products/:id", (req, res) => {
    const postId = req.params.id;
    const q = "UPDATE posts SET `title` = ?, `description` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description
    ];

    db.query(q, [...values, postId], (err, data) => {
        if (err) return res.json(err);
        return res.json("post has been updated successfully.");
    });
});

// Routes for Entreprise
app.post('/registerentreprise', (req, res) => {
    const sqlEntreprise = "INSERT INTO entreprise (`email_entreprise`,`entreprise`,`tel_entreprise`,`username_entreprise`,`password_entreprise`) VALUES (?, ?, ?, ?, ?)";
    const valuesEntreprise = [
        req.body.email_entreprise,
        req.body.entreprise,
        req.body.tel_entreprise,
        req.body.username_entreprise,
        req.body.password_entreprise
    ];
    db.query(sqlEntreprise, valuesEntreprise, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Une erreur interne du serveur s'est produite" });
        }
        return res.json(data);
    });
});

app.post('/loginentreprise', (req, res) => {
    const sql = "SELECT * FROM entreprise WHERE `email_entreprise` = ? AND `password_entreprise` = ?";
    const values = [req.body.email_entreprise, req.body.password_entreprise];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Une erreur interne du serveur s'est produite" });
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});


// Endpoint for uploading entreprise data with cover image
app.post('/entrepriseform', upload.single('cover'), async (req, res) => {
    try {
        const { name, description } = req.body;
        const coverPath = req.file.path;

        const [result] = db.query(
            'INSERT INTO entreprise_post (title, description, cover) VALUES (?, ?, ?)',
            [name, description, coverPath]
        );

        const entrepriseId = result.insertId;

        res.json({ id: entrepriseId, message: 'post added successfully' });
    } catch (error) {
        console.error('Error adding entreprise:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Listen on Ports
app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});

app.listen(8800, () => {
    console.log("connected to backend!");
});

app.listen(8801, () => {
    console.log("connected");
});
