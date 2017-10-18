import express from "express";
import load from "express-load";
//require('./config/database.js')('mongodb://192.168.99.100:27017/ragnar')
const app = express();

load('libs/middlewares.js')
.then('config')
.then('models')
.then('routes')
.then('libs/boot.js')
.into(app);

