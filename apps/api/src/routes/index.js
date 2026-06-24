import { Router } from 'express';
import healthCheck from './health-check.js';

export default () => {
    const router = Router();
    router.get('/health', healthCheck);
    router.get('/', healthCheck);

    return router;
};