import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import bodyParser from 'body-parser';

import container from './container';

const server = new InversifyExpressServer(container, null, { rootPath: '/api' });
server.setConfig(app => {
    app.use(bodyParser.json());
});

const app = server.build();
app.listen(3000, () => console.log('Demo running on port 3000.'));