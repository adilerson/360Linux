pm2 stop 0
echo "********************************** backup Eventos ***********************************"
mv /var/www/html/360Linux/videoSpinAPI/eventos /var/www/html/eventos
echo "********************************** Backup Config ***********************************"
mv /var/www/html/360Linux/videoSpinAPI/config /var/www/html/config
echo "********************************** removendo Principal ***********************************"
rm -rf /var/www/html/360Linux
sleep 1
mkdir /var/www/html/360Linux
sleep 1
echo "********************************** GIT clone ***********************************"
git clone https://github.com/adilerson/360Linux /var/www/html/360Linux
echo "********************************** NPM install VideoSPinAPI ***********************************"
cd /var/www/html/360Linux/videoSpinAPI
npm install
echo "********************************** NPM VideoSPin ***********************************"
cd /var/www/html/360Linux/videoSpin
npm install
echo "********************************** NPM FFmpeg ***********************************"
cd /var/www/html/360Linux/videoSpinAPI
apt install ffmpeg

echo "********************************** NPM build VideoSPinAPI ***********************************"
cd /var/www/html/360Linux/videoSpinAPI
npm run build 
echo "********************************** ionic ***********************************"
cd /var/www/html/360Linux/videoSpin
ionic build

echo "********************************** Permits ***********************************"
chmod -R 777 /var/www/html/360Linux

echo "********************************** Start ***********************************"
pm2 start 0

echo "********************** Restaurando Backup Eventos ****************************"
mv /var/www/html/eventos /var/www/html/360Linux/videoSpinAPI/eventos
echo "********************** Restaurando Backup Config ****************************"
mv /var/www/html/config /var/www/html/360Linux/videoSpinAPI/config