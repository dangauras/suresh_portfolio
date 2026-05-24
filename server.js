import express from "express";
import route from "./routes/route.js";
import path from "path";
const app = express();
const port = 3000;

 
// setup ejs template 
app.set('views', './views');
app.set('view engine', 'ejs');


//setup static file
app.use(express.static(path.join(process.cwd(),'public')));



//route
 app.get('/', route);

app.listen(port, ()=>{
    console.log(`server is running athttp://localhost:${port}`);
   });
