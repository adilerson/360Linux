pm2 stop 0
echo "********************************** backup Eventos ***********************************"
echo "{\"pc\":\"3\"}" > /var/www/html/pc.json
mv /var/www/html/360Linux/videoSpinAPI/eventos /var/www/html/eventos
echo "********************************** Backup Config ***********************************"
echo "{\"pc\":\"7\"}" > /var/www/html/pc.json
mv /var/www/html/360Linux/videoSpinAPI/config /var/www/html/config
echo "********************************** removendo Principal ***********************************"
echo "{\"pc\":\"9\"}" > /var/www/html/pc.json
rm -rf /var/www/html/360Linux
sleep 1
mkdir /var/www/html/360Linux
sleep 1
echo "********************************** GIT clone ***********************************"
echo "{\"pc\":\"10\"}" > /var/www/html/pc.json
git clone https://github.com/adilerson/360Linux /var/www/html/360Linux
echo "********************************** NPM install VideoSPinAPI ***********************************"
echo "{\"pc\":\"25\"}" > /var/www/html/pc.json
cd /var/www/html/360Linux/videoSpinAPI
npm install
echo "********************************** NPM VideoSPin ***********************************"
echo "{\"pc\":\"30\"}" > /var/www/html/pc.json
cd /var/www/html/360Linux/videoSpin
npm install
echo "********************************** NPM FFmpeg ***********************************"
echo "{\"pc\":\"45\"}" > /var/www/html/pc.json
cd /var/www/html/360Linux/videoSpinAPI
apt --assume-yes install ffmpeg
echo "********************************** NPM build VideoSPinAPI ***********************************"
echo "{\"pc\":\"55\"}" > /var/www/html/pc.json
cd /var/www/html/360Linux/videoSpinAPI
npm run build 
echo "********************************** ionic ***********************************"
echo "{\"pc\":\"65\"}" > /var/www/html/pc.json
cd /var/www/html/360Linux/videoSpin
ionic build

echo "********************************** Permits ***********************************"
echo "{\"pc\":\"75\"}" > /var/www/html/pc.json
chmod -R 777 /var/www/html/360Linux

echo "********************************** Start ***********************************"
echo "{\"pc\":\"85\"}" > /var/www/html/pc.json
pm2 start 0

echo "********************** Restaurando Backup Eventos ****************************"
echo "{\"pc\":\"90\"}" > /var/www/html/pc.json
mv /var/www/html/eventos /var/www/html/360Linux/videoSpinAPI/eventos
echo "********************** Restaurando Backup Config ****************************"
echo "{\"pc\":\"95\"}" > /var/www/html/pc.json
mv /var/www/html/config /var/www/html/360Linux/videoSpinAPI/config

echo "********************** Movendo arquivos de atualização e index ****************************"
echo "{\"pc\":\"100\"}" > /var/www/html/pc.json
mv futuroAtualizar.php /var/www/html/atualizar.php
mv futuroIndex.php /var/www/html/index.php
mv futuroScript.php /var/www/html/script.php