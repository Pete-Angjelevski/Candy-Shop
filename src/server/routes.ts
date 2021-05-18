import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});






router.post('/api/donate', async (req, res, next) =>  {
    try {
        
    } catch (e){
        console.log(e)
        res.status(500)
    }
}
)

export default router;