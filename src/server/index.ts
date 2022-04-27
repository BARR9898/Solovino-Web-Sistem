import App from './app';
import { connect } from './databse/databse';

const app = new App();
connect();
app.start();