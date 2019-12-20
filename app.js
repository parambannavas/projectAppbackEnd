const express= require('express');
var app= new express();
const chalk=require('chalk');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
const signinRouter=require('./src/routers/signinRouter')();
const signupRouter=require('./src/routers/signupRouter')();
const collegesRouter=require('./src/routers/collegesRouter')();
app.use(express.static(path.join(__dirname,"/public")));
app.use('/colleges',collegesRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
mongoose.connect("mongodb+srv://Paramban:Pnavasp@cluster0-ykie2.mongodb.net/project?retryWrites=true&w=majority");
mongoose.set('useFindAndModify', false);



process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node docs)
})

app.listen(process.env.PORT|| 3001,()=>{
 console.log("listening to port "+chalk.green('3001'));
});
