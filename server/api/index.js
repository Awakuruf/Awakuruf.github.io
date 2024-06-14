// server/api/index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createServer } = require('@vercel/node');

const app = express();

require('dotenv').config();
app.use(cors());

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("MONGODB_URI is not set");
    process.exit(1);
}

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Successfully connected to the database");
    } catch (error) {
        console.log("Error connecting to the database: ", error);
    }
}

connect();

app.get('/work', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const collection = db.collection('work');
        const data = await collection.find().toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/projects', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const collection = db.collection('projects');
        const data = await collection.find().toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/volunteer', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const collection = db.collection('volunteer');
        const data = await collection.find().toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/aboutMe', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const collection = db.collection('carousel');
        const data = await collection.find().toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

module.exports = createServer(app);
