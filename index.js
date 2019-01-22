// Create a Github repo called simple - http - node - server.Create an HTTP server on port 3000 with a request handler that creates a file named hello - world.txt.
// You will be using the fs module to do this. Write the content: "Hello to this great world" to the hello - world.txt file.
// Please submit your finished code in your submission.

const http = require('http');
const fs = require('fs');
const port = 3000;

// Handles HTTP requests.
const requestHandler = (request, response) => {
    response.end(`Handling a request on port ${port}`)
    fs.writeFileSync('hello-world.txt','Hello to this great world', 'utf8',(err) => {
        if (err) throw err;

    console.log('success')
    });
};

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 3000
server.listen(port, (err) => {
    if (err) {
        return console.log(`You have an error:  ${err}`);
    }

    console.log(`server is listening on ${port}`);
});