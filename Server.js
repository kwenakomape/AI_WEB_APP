// This is our server class, this the first class that will be run
//It connects to mongodb data

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/UserDetails");
const User = require('./Models/UserSchema');
var express = require("express");
var app = express();
var bodyParser = require("body-parser") ;
const path = require("path");
const reader = require('xlsx');
const { render } = require("ejs");
const Articles = require("./Models/ArticlesSchema");
app.use(express.static(path.join(__dirname, "public")));


//Here we define our routers or each request by the use
//This will render our emebeded javascript code and the data will be displayed to the user

app.use(bodyParser.urlencoded({extended: true})) ;
app.set("view engine","ejs");

app.listen(4000,function(){
    console.log("Server Started...");
    
});
app.get("/",function(req,res){
    res.render("Index");
});

app.get("/Visual1",function(req,res){
    res.render("Visualization");
});

app.post("/submit",(req,res)=>{

    const UserQuery = req.body.textareaInput;
    QueryList = UserQuery.split(",");
    QueryListTags = [];
    for(let i=0;i<QueryList.length;i++){
        temp = QueryList[i].split("=");
        QueryListTags.push(temp);

    }
    // QueryListTags = QueryList.split("=");
    FieldTags = {'TP':['Article Title','Source Title','Abstract'],'TI':['Article Title','Source Title','Abstract'],'AB':'Abstract','AU':'Authors',
    'RA':'Rating','RG':'Reprint Addresses','PY':'Publication Year','IN':'Institution','PRF':'Primary Research Fields','SP':'Specialisations','ALL':"{}"};
    
    //console.log(QueryList);
    // console.log(QueryListTags);
    // // console.log(FieldTags.length);
    
    // NewData = [];
    // firstTag = QueryListTags[j][0];  
    // secondTag = QueryListTags[j][1];
    // tagMatch = UserData[k][FieldTags[firstTag]];
    //UserDetails.Articles.createIndex( { 'Publication Year': "text" })
    // {"username" : {$regex : "son"}
    Articles.find({},function(err,UserData){
        if(err){
        }
        else{
            
            res.render('SearchResults',{UserData,UserQuery});
        }
    });
    
});
app.get("/submit",(req,res)=>{
    res.render("SearchPage");
});
