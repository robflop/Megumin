- port setting dictates which port the web- and socket server will run on
- SSLproxy affects whether the frontend will try to build the websocket connection on port 80 or port 443, so enabling it will require configuring a reverse proxy to serve the website on port 443
- updateInterval is measured in minutes following cronjob syntax, meaning a maximum value of 60 (i.e. once every hour) and a minimum value of 1 (i.e. once every minute) exist, in addition to this all values will be rounded to floats
- adminToken setting configures the password that is used to both log into the admin webpanel and the token required to authenticate for access to admin API routes
- sessionSecret is used in securing login sessions for the admin webpanel, be sure to use a lengthy and strong value for this

// TOOD: Describe new settings, including setting the real-ip header for proxying & cloudflare, adjust sslproxy etc