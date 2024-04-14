# It removes the repertory from the given id.

# To remove the repertory of the id
idsToRemove=$(echo "$@" | tr " " "\n")

for id in $idsToRemove; do
  pathRepertoryToDelete=$(find -type d | grep team | grep $id)

  rm -fr "$pathRepertoryToDelete"
done


