const kafka = require('kafka-node');

const client= new kafka.KafkaClient();

//create consumer
const Consumer = kafka.Consumer;
const consumer=new Consumer(
    client,
    [
        {topic:'test_new'}
    ],
    {
        autoCommit:false
    }
);
consumer.on('message',(msg)=>{
    console.log(msg.value);
});