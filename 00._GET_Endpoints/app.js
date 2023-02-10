//The require function allows us to include and use modules in our code,
//in this case the "express" module
const express = require("express");
const app = express();  

//Defines a constant variable birds that is assigned an array of objects.
const birds = [{name: "Crow", id: "1"}, {name: "Raven", id: "2"}
,{ name: "Woodpecker", id: "3"}];

//This method listens for HTTP GET requests to the "/birds" URL returns a response.
// In this case all objects in the birds array.
app.get("/birds", (req, res) => {
    res.send(birds);
});

//Listening for HTTP GET requsts to the "/birds/:id" URL, where
//"id" is a placeholder for a specific bird's id.
app.get( "/birds/:id", (req, res) => {
    //Preparing the response and error message.
    const bird = birds.find(bird => bird.id === req.params.id);
    console.log(req.params);
    if (!bird) {
        res.status(404).send("Bird not found.");
    } else{
        res.send(bird);
    }
});


app.listen(8080);