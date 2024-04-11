# It takes the name of the directory
# where there are images in the wrong extension
if [ $# -lt 1 ]; then echo -e "Need the name of the repertory where the files are."; exit 1; fi
nameDir=$(echo "$1")

# To save the files of course lol
nameBackup=$(date | tr " " "x" | tr ":" "x")
nameFiles=$(find -type f | grep $nameDir | cut -d "/" -f 3-10 | grep -E 'jpg|png')

mkdir "$nameBackup"

for nameFile in $nameFiles; do
  mv $nameDir/$nameFile $nameBackup/$nameFile
done


