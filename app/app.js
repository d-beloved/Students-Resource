import express from 'express';
import reload from 'reload';
const app = express();
import dataFile from './data/data.json';

app.set('port', process.env.PORT || 5000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'ALC-Student';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/students'));

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});

reload(server, app);
