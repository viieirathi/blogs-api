require('dotenv').config();
const express = require('express');
const error = require('./middlewares/error');
const { userRouters, loginRouters } = require('./routes');

const app = express();
app.use(express.json());
app.use(error);

app.use('/user', userRouters);
app.use('/login', loginRouters);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});