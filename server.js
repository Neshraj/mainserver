const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'ok!' });
});

const serverUrls = [
  "https://mainserver-raj.onrender.com",
  "https://svpcettapserver.onrender.com",
  "https://instacloneserver-00mi.onrender.com",
  "https://sosgame-jnux.onrender.com",
  "https://meetchat.onrender.com",
  "https://collegedetailsserver.onrender.com"
];

const pingServers = () => {
  serverUrls.forEach(serverUrl => {
    axios.get(serverUrl)
      .then(response => {
        console.log(`Ping successful for ${serverUrl} at ${new Date().toISOString()} with status: ${response.status}`);
      })
      .catch(error => {
        console.error(`Error pinging ${serverUrl} at ${new Date().toISOString()}:`, error.message);
      });
  });
};

setInterval(pingServers, 60000);
pingServers(); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
