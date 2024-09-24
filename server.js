const axios = require('axios');

const serverUrls = [
  "https://svpcettapserver.onrender.com",
  "https://instacloneserver-00mi.onrender.com",
  "https://sosgame-jnux.onrender.com",
  "https://meetchat.onrender.com"
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
setInterval(pingServers, 120000);
pingServers();
