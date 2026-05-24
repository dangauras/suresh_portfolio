import express, { Router } from 'express';
import {home} from "../controllers/home.js";
import {about} from "../controllers/about.js";
const route = express.Router();


route.get('/', home);
route.get('/about', about);



export default route;