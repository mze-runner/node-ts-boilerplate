import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'Hello World!'});
  });

export default router;