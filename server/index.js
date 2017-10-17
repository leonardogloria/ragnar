import express from "express";
import load from "express-load";

const PORT = 3000;
const app = express();

load('libs/middlewares.js')
.then('routes')
.then('libs/boot.js')
.into(app);

