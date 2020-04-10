const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

let array = []

for(i=1; i<=50; i++){
    array.push(i)
}

app.get('/', (req, res) => {
    res.render('index', {array});
});

app.listen(3000, () => console.log('Listening on port 3000!'));