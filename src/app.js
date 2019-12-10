import path from 'path'
import express from 'express'
import IndexRouter from './routes/IndexRoute'

// constant variables.
const DIST_DIR = path.resolve("../dist"),
		SRC_DIR = path.resolve("./src/"),
		IndexHtml = path.join(SRC_DIR, "views/index.html");

const app = express();
const port = 3000;

console.log(path.resolve('./public'));

app.use('/static',express.static(path.resolve('./public')));

app.use('/', IndexRouter);

app.listen(port, () => console.log(`listening on port ${port}`))
