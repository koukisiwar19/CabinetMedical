import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request, Response} from "express";

@Injectable()
export class logger implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log('ip:', req.ip);
        next();
    }
}
