const express = require("express");
const request = require("request-promise");

const apiKey = "4005fe359df33166377d9c562fe86094";
const baseUrl=`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const app=express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome')
});


app.get('/products/:productId',async(req,res)=>{
    const {productId} = req.params;
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error)
    }
})










app.listen(PORT,()=> console.log(`server runnin on port ${PORT}`))