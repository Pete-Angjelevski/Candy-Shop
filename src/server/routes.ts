import * as express from 'express';
import * as stripeLoader from 'stripe'


const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


const stripe: any = new stripeLoader('SECRET KEY HERE')

const charge = (token: string, amt: number) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'nzd',
        source: token,
        description: 'Statement Description'
    })
}

router.post('/api/donate', async (req, res, next) =>  {
    try {
        let data = await charge(req.body.token.id, req.body.total)
        console.log(data)
        res.send("Charged")
    } catch (e){
        console.log(e)
        res.status(500)
    }
}
)

export default router;