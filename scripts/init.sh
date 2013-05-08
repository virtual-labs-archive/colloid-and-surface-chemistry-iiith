#read the file line by line and install
FILENAME=$1
cat $FILENAME | while read LINE
do
apt-get install -y $LINE
echo "no.of lines"
done

#runs the makefile
cd src
make all
cd ..

#copies the build folder to localhost
cp -r build/ /var/www/

