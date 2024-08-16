// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import postgres from 'postgres';

// Create an Express application
const app = express();

//cors
const corsOptions = {
  origin: process.env.FRONTEND_BASE_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//mysql connection

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Sjmella4977',
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!!');
// });

// postgres connection

// const sql = postgres({
//   host: 'localhost',
//   port: 5432,
//   user: 'stijnverhaegen',
//   database: 'vdp4',
// });

// const players = sql`
//   SELECT first_name, last_name
//   FROM public.players;
// `.then((response) => {
//   console.log(response);
// });

// Specify the port number for the server
const port = process.env.PORT || 3000;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send({ test: 'Test' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
