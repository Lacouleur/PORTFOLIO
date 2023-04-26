function urlBuilder(galeryName, artworkName, id, askedSize) {
  /*   console.warn("urlBuilder", galeryName, artworkName, id, askedSize); */
  // askedSize {side: "w" or "h", size: number}
  let size = "";

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  if (askedSize?.size && typeof askedSize.size !== "number") {
    console.error("askedSize must be a number, we get : ", typeof askedSize);
  }

  /*   if (!galeryName || !artworkName || !id) {
    console.error(
      "Missing mandatory Parameters (galeryName, artworkName, id, askedSize) we get : ",
      { galeryName, artworkName, id, askedSize },
    );
    return `https://ik.imagekit.io/artworks/Gesture_3CarnetCroquis.jpg`;
  }
 */
  if (galeryName === "paintings")
    return `https://ik.imagekit.io/artworks/${galeryName}${size}/${artworkName}_maze/dvoindrot-${artworkName}_maze-${id}.jpg`;
}

export default urlBuilder;
