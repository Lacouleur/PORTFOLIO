/* eslint-disable prettier/prettier */
function paintingsUrlBuilder(galerieName, artworkName, id, askedSize) {
  // askedSize {side: "w" or "h", size: number}
  let size = "";

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  if (askedSize?.size && typeof askedSize.size !== "number") {
    console.error("askedSize must be a number, we get : ", typeof askedSize);
  }

  return `https://ik.imagekit.io/artworks/${galerieName}${size}/${artworkName}_maze/dvoindrot-${artworkName}_maze-${id}.jpg`;
}

function illustrationsUrlBuilder(galerieName, artworkName, id, askedSize, sub) {
  // askedSize {side: "w" or "h", size: number}

  let size = "";
  const baseURL = `https://ik.imagekit.io/artworks/${galerieName}`;

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  if (askedSize?.size && typeof askedSize.size !== "number") {
    console.error("askedSize must be a number, we get : ", typeof askedSize);
  }

  if (!sub) {
    /*  https://ik.imagekit.io/artworks/illustrations/landscapes/dvoindrot-landscapes-4.jpg?updatedAt=1682953929018 */

    return `${baseURL}${size}/${artworkName}/dvoindrot-${artworkName}-${id}.jpg`;
  }
  if (sub) {
    /*  https://ik.imagekit.io/artworks/illustrations/characters/fox/dvoindrot-fox-5.png?updatedAt=1682954045013 */

    return `${baseURL}/${artworkName}/${sub.subName}/dvoindrot-${
      sub.subName
    }-${id}.${sub.type || "jpg"}`;
  }
}

function urlBuilder(params) {
  if (!params || !params.galerieName) return;
  const { galerieName, artworkName, id, askedSize, sub } = params;

  if (galerieName === "paintings")
    return paintingsUrlBuilder(galerieName, artworkName, id, askedSize);
  if (galerieName === "illustrations")
    return illustrationsUrlBuilder(
      galerieName,
      artworkName,
      id,
      askedSize,
      sub,
    );
}

export default urlBuilder;
