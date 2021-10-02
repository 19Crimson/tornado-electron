:: Installing dependencies packages
call npm install
:: Open server folder
cd server
:: Installing Tornado Web Server
pip install tornado
:: Starting Tornado Server minimized
start /MIN server.py
:: Starting Electron Web-Client
npm start