const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('🎹 Piano 72 teclas rodando!');
  console.log('');
  console.log('No PC:         http://localhost:' + PORT);
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log('Na TV/Celular: http://' + net.address + ':' + PORT);
      }
    }
  }
  console.log('');
});
