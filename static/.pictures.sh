# It takes the name of the repertory where there are the pics to put
if [ $# -lt 1 ]; then echo -e "Need to precise the directory where there are the pictures."; exit 1; fi

namePhotos=$(find -type f | grep $1 | sort)

for name in $namePhotos; do
  # Cas identity of the picture
  id=$(echo "$name" | cut -d "/" -f 3 | cut -d "1" -f 1 | cut -d "2" -f 1 | cut -d "3" -f 1)

  # To create the repertory, it is unique
  directoryWithIdInIt=$(find -type d | grep $id)
  numberDir=$(echo "$directoryWithIdInIt" | wc -w)

  if [ $numberDir -lt 1 ]; then
    directoryWithIdInIt="img/team/$id"
    echo -e
    echo -e "Creation of the repertory $directoryWithIdInIt"

    mkdir -p "$directoryWithIdInIt"
  fi

  # To move the files to the right directory
  echo -e "Put the img $name in $directoryWithIdInIt"
  cp "$name" $directoryWithIdInIt/$(echo "$name" | cut -d "/" -f 3-10)

done


