#!/bin/bash
echo "********************************** Instalando Apache ***********************************"
apt install apache2
echo "********************************** Instalando php ***********************************"
apt-get install apache2 php libapache2-mod-php
echo "********************************** Instalando ZIP ***********************************"
sudo apt-get install -y php-zip
echo "********************************** Instalando GIT ***********************************"
sudo apt install git-all
echo "********************************** Update Linux ***********************************"
sudo apt update
echo "********************************** Instalando Node ***********************************"
sudo apt install nodejs
echo "********************************** Instalando NPM ***********************************"
sudo apt install npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
echo "********************************** GitClone ***********************************"
git clone https://github.com/adilerson/360Linux /var/www/html/360Linux
echo "********************************** NEST ***********************************"
npm install -g @nestjs/cli
echo "********************************** IONIC ***********************************"
npm install -g @ionic/cli
echo "********************************** PM2 ***********************************"
npm install pm2 -g
echo "********************************** NPM I VIDEOSPINAPI ***********************************"
cd /var/www/html/360Linux/videoSpinAPI
npm install
echo "********************************** npm i VIDEOSPIN ***********************************"
cd /var/www/html/360Linux/videoSpin
npm install
cd /var/www/html/360Linux/videoSpinAPI
apt install ffmpeg
cd /var/www/html/360Linux/videoSpinAPI
npm run build 
echo "********************************** ionic ***********************************"
cd /var/www/html/360Linux/videoSpin
ionic build

echo "********************************** GERAR CERTIFICADO NANO ***********************************"
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt
mv -r /etc/apache2/conf-available/ssl-params.conf /etc/apache2/conf-available/ssl-params.conf.bak
echo "SSLCipherSuite EECDH+AESGCM:EDH+AESGCM
SSLProtocol -all +TLSv1.3 +TLSv1.2
SSLOpenSSLConfCmd Curves X25519:secp521r1:secp384r1:prime256v1
SSLHonorCipherOrder On 
Header always set X-Frame-Options DENY 
Header always set X-Content-Type-Options nosniff 
SSLCompression off 
SSLUseStapling on 
SSLStaplingCache 'shmcb:logs/stapling-cache(150000)' 
SSLSessionTickets Off" >> /etc/apache2/conf-available/ssl-params.conf

sudo cp /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf.bak
mv -r /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf.bak1
echo "********************************** SEGUNDO ARQUIVO NANO ***********************************"
echo "<IfModule mod_ssl.c> 
       <VirtualHost _default_:443> 
               ServerAdmin webmaster@localhost 
                ServerName 192.168.36.36 
               DocumentRoot /var/www/html 
               ErrorLog ${APACHE_LOG_DIR}/error.log 
               CustomLog ${APACHE_LOG_DIR}/access.log combined 
               SSLEngine on 
               SSLCertificateFile      /etc/ssl/certs/apache-selfsigned.crt 
               SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key 
               <FilesMatch '\.(cgi|shtml|phtml|php)$'> 
                               SSLOptions +StdEnvVars 
               </FilesMatch> 
               <Directory /usr/lib/cgi-bin> 
                               SSLOptions +StdEnvVars 
               </Directory> 
       </VirtualHost></IfModule>" >> /etc/apache2/sites-available/default-ssl.conf
echo "********************************** app list ***********************************"
sudo ufw app list
echo "********************************** ufw status ***********************************"
sudo ufw status
echo "********************************** ufw allow ***********************************"
sudo ufw allow 'Apache Full'
sudo ufw delete allow 'Apache'
echo "********************************** ufw status ***********************************"
sudo ufw status
echo "********************************** a2enmod ssl ***********************************"
sudo a2enmod ssl
echo "********************************** a2enmod headers ***********************************"
sudo a2enmod headers
echo "********************************** a2enmod default-ssl ***********************************"
sudo a2ensite default-ssl
echo "********************************** ssl params ***********************************"
sudo a2enconf ssl-params
echo "********************************** apachectl configtest ***********************************"
sudo apache2ctl configtest
echo "********************************** restart apache ***********************************"
sudo systemctl restart apache2
echo "********************************** PERMISSOES ***********************************"
chmod -R 777 /tmp
chmod -R 777 /var/www/html/360Linux

echo "********************************** pm2 start ***********************************"
cd /var/www/html/360Linux/videoSpinAPI
pm2 start /dist/main.js --name api
pm2 startup
pm2 save