const express = require ('express');
const app  = express();
app.set('port', (process.env.PORT || 5000));
const server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
const io = require('socket.io').listen(server);
      io.on('connection', (socket)=>{
  
        console.log("Connected to Socket!!"+ socket.id);
        socket.on('addPedido', (pedido) => {
          console.log('socketData: ', pedido);
          io.emit('pedido', pedido);
          console.log('data emit: ', pedido);
      
        });
      })  