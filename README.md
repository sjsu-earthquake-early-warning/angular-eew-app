# angular-eew-app readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Build Instructions For Linux
* This app requires nodeJS and npm to be installed on your environment. These instructions assume you are running Ubuntu 16.04
* These instructions also assume you have set up apache where the root folder is in /var/www/html/dist/angular-eew-app/
  * This can be done by editing the config file in `/etc/apache2/sites-enabled/`
* Do `npm install -g @angular/cli`
* Clone this repository with `git clone https://github.com/sjsu-earthquake-early-warning/angular-eew-app.git`
* Navigate to the sjsu-earthquake-early-warning folder that you cloned
* Do `npm install`
* When that is done do `ng build --prod` for production, alternatively do `ng build` for the devleopment version
* The build will output in a folder called /dist/ in the same directory
* Copy this /dist/ folder to `/var/www/html/`
* Then reset apache with `systemctl restart apache2.service`
