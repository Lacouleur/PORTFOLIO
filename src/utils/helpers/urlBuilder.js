/* eslint-disable prettier/prettier */
function paintingsUrlBuilder(galerieName, artWorkCategory, id, askedSize) {
  // askedSize {side: "w" or "h", size: number}
  let size = askedSize;

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  return {
    url: `https://ik.imagekit.io/artworks/${galerieName}${size}/${artWorkCategory}_maze/dvoindrot-${artWorkCategory}_maze-${id}.jpg`,
    meta: { title: artWorkCategory, id },
  };
}

function illustrationsUrlBuilder(
  galerieName,
  artWorkCategory,
  id,
  askedSize,
  sub,
) {
  // askedSize {side: "w" or "h", size: number}

  let size = askedSize;

  function imgId() {
    if (id.toString().length === 1) {
      return `0${id}`;
    }
    return id;
  }

  const buildId = imgId();

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  const baseURL = `https://ik.imagekit.io/artworks/${galerieName}`;

  if (!sub) {
    // url example
    /*  https://ik.imagekit.io/artworks/illustrations/landscapes/dvoindrot-landscapes-4.jpg?updatedAt=1682953929018 */

    return {
      url: `${baseURL}${size}/${artWorkCategory}/JauneLacouleur-${artWorkCategory}-${buildId}.jpg`,
      meta: {
        artWorkCategory: artWorkCategory,
        id: id,
        formatedId: buildId,
        subName: sub?.subName,
      },
    };
  }
  if (sub) {
    // url example
    /*  https://ik.imagekit.io/artworks/illustrations/characters/fox/dvoindrot-fox-5.png?updatedAt=1682954045013 */

    return {
      url: `${baseURL}${size}/${artWorkCategory}/${
        sub.subName
      }/JauneLacouleur-${sub.subName}-${buildId}.${sub.type || "jpg"}`,
      meta: { artWorkCategory: artWorkCategory, buildId, subName: sub.subName },
    };
  }
}

function urlBuilder(params) {
  if (!params || !params.galerieName) return;
  const { galerieName, artWorkCategory, id, askedSize, sub } = params;

  if (galerieName === "paintings")
    return paintingsUrlBuilder(galerieName, artWorkCategory, id, askedSize);
  if (galerieName === "illustrations")
    return illustrationsUrlBuilder(
      galerieName,
      artWorkCategory,
      id,
      askedSize,
      sub,
    );
}

export default urlBuilder;
