import express from "express";
import {join} from 'path'
const app=express()
app.set('view engine','ejs')
app.use(express.static(join(process.cwd(),'/public')))
app.get('/',(req,res)=>{
res.render('/index.html')
})
app.listen(process.env.PORT || 8080)