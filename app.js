//jshint esversion:

//replace var with const for function all global but for other const and const are local
const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname + "/date.js");


const app = express();

const items=["Buy Food", "Cook Food", "Eat Food" ];

const workItems=[];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

//for css file file is on server to for finding path we have to place link files in public folder and specify it.
app.use(express.static("public"));



app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", {listTitle: day , newListItems:items });
});

app.post("/", function(req ,res){
  const item=req.body.newItem;
    if (req.body.list === "Work")
    {
      workItems.push(item);
      res.redirect("/work");
    }
    else
    {
      items.push(item);
      res.redirect("/");
    }
});

// localhost:3000/work section
app.get("/work", function(req,res){
  //list.ejs page
  res.render("list",{listTitle: "Work List" , newListItems:workItems});

});

app.get("/about", function(req,res){
  //list.ejs page
  res.render("about");

});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});


//LEARNING TAG
// <% if (kindOfDay === "Saturday"  || kindOfDay === "Sunday")
// { %>
// <h1 style="color:purple"> <%= kindOfDay %> ToDO List </h1>
// <%  }
// else{ %>
//   <h1 style="color:blue"> <%= kindOfDay %> ToDO List </h1>
//   <%
// } %>
