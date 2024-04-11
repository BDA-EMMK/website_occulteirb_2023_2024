WEBP = cwebp
TEMP_DIR = temp

# Names of the pictures from TEMP_DIR with webp extension
NAME_PICTURES_WEBP = $(shell find -type f | grep ${TEMP_DIR} | sed 's/png/webp/' | sed 's/jpg/webp/')

# To convert the images into the webp extension
${TEMP_DIR}/%.webp: ${TEMP_DIR}/%.png
	${WEBP} -o $@ $<

${TEMP_DIR}/%.webp: ${TEMP_DIR}/%.jpg
	${WEBP} -o $@ $<

conversion: ${NAME_PICTURES_WEBP}

# To remove the files with the .jpg or .png extension
clear${TEMP_DIR}:
	./.clearWrongExtensions.sh ${TEMP_DIR}

# To move all the photos in the right directories
move:
	./.pictures.sh ${TEMP_DIR}
