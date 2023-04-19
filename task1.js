import express from 'express';
const app = express();
const students = [
    "Abdulrahman",
    "Mustafa",
    "Ahmed",
    "yusif",
];
const studentlist =(req,res) => {
    let o="<ul>";
    for (let i=0; i < students.length; i++){
        o+="<li>" + students[i] + "</li>";
    }
    o+="</ul>";
    res.send(o);
};
app.get('/students',studentlist);
app.listen(5000);