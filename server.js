import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';

// create express server instance
const app = express();

// routes
app.get("/api/emailjs_public_key", (_, res) => res.send({ "publicKey": `${process.env.VITE_EMAILJS_PUBLIC_KEY}`}));
app.get("/api/emailjs_template_id", (_, res) => res.json({ "templateId": `${process.env.VITE_EMAILJS_TEMPLATE_ID}`}));
app.get("/api/google_maps_api_key", (_, res) => res.send({ "mapsApiKey": `${process.env.VITE_GOOGLE_MAPS_API_KEY}` }));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));