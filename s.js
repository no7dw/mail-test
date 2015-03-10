var mandrill = require('node-mandrill')('bCUNA1fNlMt7jcKssm0C7A');
mandrill('/messages/send', {
    message: {
        to: [{email: 'no7david@gmail.com', name: 'Wei Deng'}],
        from_email: 'wdeng@kalengo.com',
        subject: "node-mandrill test",
        text: "Hello, I sent this message using mandrill."
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) 
	console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else 
	console.log('seems good\n',response);
});
