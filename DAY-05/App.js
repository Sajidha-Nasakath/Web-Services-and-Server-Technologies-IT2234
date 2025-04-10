const express = require('express');
const app = express();
const port = 3001;


const students = require('./studentdb');
app.get(
    '/stu',(req, res)=>{
        res.send(students);
    });
    

app.get('/stu/:id', (req, res)=>{
    const id = req.params.id
    const result = students.find((students)=>students.registrationNumber === id);
    if(result)
    {
        res.send(result);
    }
    else{
        res.status(404).send("Student not found!");
    }  
});


app.get('/stu/gender/:gen', (req, res)=>{
    const gen= req.params.gen
    const gender = students.filter((students)=>students.gender === gen);
        res.send(gender);   
});


app.get('/Name/:name',(req,res)=>{
    const name= req.params.name
    const Name = students.filter((student)=>student.studentName === name);
    res.send(Name);
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})