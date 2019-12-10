import {Router} from 'express';

const IndexRoute = Router(),
        SRC_DIR = path.resolve("./src/"),
        IndexHtml = path.join(SRC_DIR, "views/index.html");

IndexRoute.get('/', (req, res) => {
    res.sendFile(IndexHtml);
})

export default IndexRoute;
