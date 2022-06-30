require('dotenv').config();
const express = require('express');
const error = require('./middlewares/error');
const { userRouters, loginRouters, categoriesRouters, postsRouters } = require('./routes');
const swaggerUI = require('swagger-ui-express');
const app = express();
const swaggerJson = require('./swagger.json');

app.use(express.json());
app.use(error);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));
app.use('/user', userRouters);
app.use('/login', loginRouters);
app.use('/categories', categoriesRouters);
app.use('/post', postsRouters);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});