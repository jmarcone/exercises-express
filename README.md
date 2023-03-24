# exercises-react

Create a folder exercises_express then go to this folder in your terminal and execute:

npm init -y
Exercise 1 (Help)
Install express into your directory with the npm install express --save command.
We would like to modify our following code so that it displays a message when the person arrives on the page with their browseron (http://localhost:3000), make an app.js file with :

var express = require('express');
var app = express();
var server = app.listen(3000,function(){
  console.log('Hello');
});

Exercise 2 (Help)
For this Exercise we will need a little software called Insomnia, it will allow us to test our URLs.

We now want that when the user sends a PUT request to the home (http://localhost:3000/) it sends back an HTML file with :

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
<body>
  How are you?
</body>
</html>
Exercise 3 (Help)
We now want that when the user sends a DELETE request to the home (http://localhost:3000/) it sends back a JSON with:

{"good" : "yep"}
Exercise 4 (Help && Help && Help)
Render this EJS code if the user accesses the URL /test-ejs and render this page with my first title as value of myTitle variable.

<!DOCTYPE html>
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
</html>
Exercise 5 (Help)
We pass an array to our page /test-ejs2:

{
  users : ['Bob', 'John', 'Jane' ]
}
Create an EJS page that uses the forEach method to list each element.

Exercise 6
Thanks to MethodOverride, create a page that will send a PUT request on /.

Exercise 7 (Help)
Create a form (using the method POST) with two input:text fields to enter the first and last name and send it on the /showPost route.

Display in the console the result of the POST.

Exercise 8 (Help)
Create a form (using the method GET) with two input:text fields to enter the first and last name and send it on the /showGet route.

Display in the console the result of the GET.

Exercise 9 (Help)
Create a route of the type /number/1 where the number will be a variable :id and will be displayed on the page. E.g. on the route /number/1337 we will see:

The number is 1337
Exercise 10 (Help)
Add Axios to your project et create a GET request on http://jsonplaceholder.typicode.com/posts/1 when the user visits http://localhost:3000/postlist.

Exercise 11 (Help)
Via the query in the previous exercise write the result of the query in a posts.json file.

Exercise 12 (Help)
Install the package pm2 globally and set up a web server with your current site and display the list of servers.

Exercise 13 (Help)
Create a server for your website with 1 cluster.

Exercise 14 (Help)
Set up a server that automatically restarts itself when files are modified.

Exercise 15 (Help && Help)
Display all the logs of your server then display the RAM/CPU usage of your application.
