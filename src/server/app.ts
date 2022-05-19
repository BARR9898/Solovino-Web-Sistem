import express from 'express';
import morgan from 'morgan';
import cors from 'cors'


// Routes
import adoptionsRoutes from './routes/adoptions.routes'
import postsRoutes from './routes/posts.routes'
import sobreNosotrosRoutes from './routes/sobre-nostros'
import userRoutes from './routes/users.routes'
class Applicaction {

    app: express.Application;
   
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();


    }

    settings() {
        this.app.set('port', 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(cors()); //PERMITE COMUNICACION DESDE FUERA DEL SERVIDOR
        

    }

    routes() {
        this.app.use('/adopciones',adoptionsRoutes)
        this.app.use('/posts',postsRoutes)
        this.app.use('/sobre-nosotros',sobreNosotrosRoutes)
        this.app.use('/users',userRoutes)
    }

    
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}

export default Applicaction;