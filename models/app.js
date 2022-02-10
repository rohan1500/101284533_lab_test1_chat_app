const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const app = express();
require("./conn");

const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path))



app.get("/", (req, res) => {
   res.send("hello from my side")
})
app.get("/", (req, res) => {

} )
app.get("./login", (req,res ) => {
    res.render("login")

})

app.listen(port, ()   => {
    console.log(`server is running at port no ${port}`);
})


// Routes

app.get("/login", async (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });
  app.post("/login", async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            return res.redirect("/signup?err=username");
          }
          res.send(err);
        } else {
          return res.redirect("/login");
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });


app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  app.post("/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const user = await userModel.find({ username: username });
  
    try {
      if (user.length != 0) {
        if (user[0].password == password) {
          return res.redirect("/?uname=" + username);
        } else {
          return res.redirect("/login?wrong=pass");
        }
      } else {
        return res.redirect("/login?wrong=uname");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get("/chat", async (req, res) => {
    res.sendFile(__dirname + "/public/chat.html");
  });