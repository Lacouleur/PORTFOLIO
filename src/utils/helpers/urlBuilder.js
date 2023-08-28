/* eslint-disable prettier/prettier */
function paintingsUrlBuilder(galerieName, artworkName, id, askedSize) {
  // askedSize {side: "w" or "h", size: number}
  let size = askedSize;

  if (askedSize?.size && typeof askedSize.size === "number") {
    size = `/tr:${askedSize.side}-${askedSize.size}`;
  }

  return {
    url: `https://ik.imagekit.io/artworks/${galerieName}${size}/${artworkName}_maze/dvoindrot-${artworkName}_maze-${id}.jpg`,
    meta: { title: artworkName, id },
  };
}

function illustrationsUrlBuilder(galerieName, artworkName, id, askedSize, sub) {
  // askedSize {side: "w" or "h", size: number}

  let size = askedSize;

  function imgId() {
    console.log(id.toString());

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

    console.warn(
      `${baseURL}${size}/${artworkName}/JauneLacouleur-${artworkName}-${buildId}.jpg`,
    );

    return {
      url: `${baseURL}${size}/${artworkName}/JauneLacouleur-${artworkName}-${buildId}.jpg`,
      meta: { title: artworkName, buildId, subName: sub?.subName },
    };
  }
  if (sub) {
    // url example
    /*  https://ik.imagekit.io/artworks/illustrations/characters/fox/dvoindrot-fox-5.png?updatedAt=1682954045013 */

    return {
      url: `${baseURL}${size}/${artworkName}/${sub.subName}/JauneLacouleur-${
        sub.subName
      }-${buildId}.${sub.type || "jpg"}`,
      meta: { title: artworkName, buildId, subName: sub.subName },
    };
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
