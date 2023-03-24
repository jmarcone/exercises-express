import express from 'express';
import ejs from "ejs";
import methodOverride from 'method-override';
import axios from 'axios';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ strict: false }));

app.use(methodOverride('X-HTTP-Method-Override'))


const server = app.listen(3000, function () {
  console.log('watch Hello');
});

// respond with "hello world" when a GET request is made to the homepage
app
  //Exercise 1 
  .get('/', (req, res) => {
    res.send('hello world reload')
  })

  //Exercise 2 
  .put('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Hello</title>
    </head>
    <body>
      How are you?
    </body>
    </html>`);
  })

  //Exercise 3
  .delete("/", (req, res) => {
    res.json({ "good": "yep" })
  })

  //Exercise 4
  .get("/test-ejs/:myTitle", (req, res) => {

    const html = ejs.render(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Document</title>
        </head>
        <body>
          <% if (myTitle) { %>
            <h1><%= myTitle %></h1>
          <% } %>
        </body>
        </html>`,
      { myTitle: req.params.myTitle }
    );

    res.send(html);
  })

  //Exercise 5
  .post("/test-ejs2", (req, res) => {
    let usernames = req.body?.users;

    let html = ejs.render('<%= people.join(", "); %>', { people: usernames });

    res.send(html);
  })

  //Exercise 6
  //TODO

  //Exercise 7
  .post("/showPost", (req, res) => {
    const firstName = req.body?.firstName;
    const lastName = req.body?.lastName;

    const html = ejs.render(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>User name</title>
        </head>
        <body>
          <% if (firstName && lastName) { %>
            <h1><%= firstName %> <%= lastName %></h1>
          <% } %>
        </body>
        </html>`,
      {
        firstName: firstName,
        lastName: lastName
      });
    res.send(html);
  })

  //Exercise 8
  .get("/showPost", (req, res) => {
    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>User name</title>
        </head>
        <body>
          <form method='POST'>
            <input name='firstName' placeholder='write your first name' />
            <input name='lastName' placeholder='write your last name' />
            <button  type='submit'>Submit</button>
          </form>
        </body>
        </html>`;

    res.send(html);
  })

  //Exercise 9 
  .get('/number/:id/', (req, res) => {
    const id = req.params.id;
    res.send(`The number is ${id}`);
  })

  //Exercise 10 & 11
  .get('/postlist/', async (req, res) => {
    const id = req.params.id;

    let { data } = await axios.get('http://jsonplaceholder.typicode.com/posts/1');

    // data = JSON.stringify(data);
    await writeFile('posts.json', data);

    res.send(data);

  })


  //Exercise 12
  .get('/postlist/', async (req, res) => {
    const id = req.params.id;

    let { data } = await axios.get('http://jsonplaceholder.typicode.com/posts/1');

    data = Buffer.from(JSON.stringify(data));
    await writeFile('posts.json ', data);

    res.send(data);

  })
  ;

