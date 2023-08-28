const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const blogRouter = require('./controller/blogs')

const mongoUrl = config.MONGODB_URI
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

morgan.token('req-body', (req) => JSON.stringify(req.body));
app.use(morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  tokens.res(req, res, 'content-length'), '-',
  tokens['response-time'](req, res), 'ms',
  tokens['req-body'](req, res),
].join(' ')));

app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


const port = config.PORT;
app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
