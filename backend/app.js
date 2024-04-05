const express = require('express'); 
const app = express(); 
// const mysql = require('mysql');
const bodyParser= require('body-parser');
const cors= require('cors');
const session = require('express-session');
const loginRouter = require('./routes/loginRoutes.js');
const productRouter = require('./routes/productRoutes.js');
const feedbackRouter = require('./routes/feedbackRoutes.js');
const userRouter = require('./routes/userRoutes.js')

// MySQL database connection
// const connection = mysql.createConnection({
//     connectionLimit: 10,
//     host: 'sql5.freesqldatabase.com',
//     user: 'sql5691451',
//     password: 'gAj3TwtNiH',
//     database: 'sql5691451'
//   });


  
// pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error connecting to database:', err);
//       return;
//     }
//     console.log('Connected to database');
//     connection.release();
//   });


// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

app.use(express.json()); 
app.use(cors());
//app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret_key_here',
    cookie:{maxAge:30000},
    //resave: false,
    saveUninitialized: false
  }));


app.use("/user",loginRouter )
app.use("/protected/products",productRouter )
app.use("/protected/feedback",feedbackRouter)
app.use("/protected/user",userRouter)

const PORT = 3000; 

// app.post('/', (req, res)=>{ 
//     const {name} = req.body; 
      
//     res.send(`Welcome ${name}`); 
// }) 
  
// app.get('/', (req, res)=>{ 
//     res.status(200); 
//     res.send("Welcome to root URL of Server"); 
// }); 

// app.get('/hello', (req, res)=>{ 
//     res.set('Content-Type', 'text/html'); 
//     res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
// }); 

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

// module.exports = connection;