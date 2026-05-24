import express, { Router } from 'express';
import {home} from "../controllers/home.js";
import {about} from "../controllers/about.js";
import {resume} from "../controllers/resume.js";
import {services} from "../controllers/services.js";
import {portfolio} from "../controllers/portfolio.js";
import {contact} from "../controllers/contact.js";
import path from 'path';

const route = express.Router();


route.get('/', home);
route.get('/about', about);
route.get('/resume', resume);
route.get('/services', services); 
route.get('/portfolio', portfolio);
route.get('/contact', contact);  



export default route;