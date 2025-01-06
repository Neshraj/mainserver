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
"https://instacloneserver-raj1.onrender.com", 
"https://collegedetailsserver-raj1.onrender.com", 
"https://handleit-server.onrender.com", 
"https://svpcettapserver-raj1.onrender.com", 
"https://meetchats.onrender.com"

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

//setInterval(pingServers, 60000);
pingServers(); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
