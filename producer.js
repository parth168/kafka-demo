const kafka = require('kafka-node');

const client= new kafka.KafkaClient();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/send',async (req,res)=>{
    const HighLevelProducer = kafka.HighLevelProducer;
    const highLevelProducer = new HighLevelProducer(client);

    highLevelProducer.send([{topic:req.body.topic,messages:req.body.message}],(err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
});

app.listen(3000, () => console.log(`Listening on port 3000...`));