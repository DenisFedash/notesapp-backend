import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/notes.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/notes', router);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});