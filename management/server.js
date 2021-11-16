const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
      res.send([
            [{
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: 'shin-kim',
            age: '112112',
            gender: 'male',
            job: 'SamSung'
      },
      {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: 'sung-kim', age: '2212333',
            gender: 'female', job: 'LG'
      },
      {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: 'pang-kim', age: '3322332',
            gender: 'female', job: 'Kia'
      },
      
      
      ]]);

})

app.listen(port, ()=> console.log(`Listening on port ${port}`));
