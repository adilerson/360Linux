pm2 stop 0
echo "********************************** Clear directory 360 ***********************************"
rm -rf /var/www/html/360Linux
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