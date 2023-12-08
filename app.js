const express = require('express');
const { engine } = require('express-handlebars');

const app = express()

//Templating engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index')
});

app.listen(5000, () => {
    console.log("Server start at Port 5000");
})