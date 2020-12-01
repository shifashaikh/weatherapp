const express=require("express");
const hbs=require("hbs");
const app=express();
const path=require("path");
const port= process.env.PORT || 8000;


// public static path
const StaticPath =path.join(__dirname,"../public");
// new path on views
const templatePath=path.join(__dirname,"../Templates/views")
// for partials
const partialsPath =path.join(__dirname,"../Templates/partials")
app.set('views','../views');
app.set('view engine','hbs');

// as views changed its directory
app.set("views",templatePath)
app.use(express.static(StaticPath))
hbs.registerPartials(partialsPath);


app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/home",(req,res)=>{
  res.render("index");
})
app.get("/about",(req,res)=>{
 res.render("about");
  })

app.get("/weather",(req,res)=>{
   res.render("weather");
 })

 app.get("*",(req,res)=>{
    res.render("404error");
  })
           



app.listen({port},()=>{

    console.log(`listening to the ${port}`);
})