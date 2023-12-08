const express = require('express');
const { engine } = require('express-handlebars');
const fileupload = require('express-fileupload');

const app = express()

app.use(fileupload());

//Templating engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/store', (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    sampleFile = req.files.sampleFile;
    console.log(sampleFile);
});

app.listen(5000, () => {
    console.log("Server start at Port 5000");
})