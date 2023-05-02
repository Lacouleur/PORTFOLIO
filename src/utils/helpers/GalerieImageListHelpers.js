import urlBuilder from "./urlBuilder";

function getAllUrls(askedSize, imagesNumber, galerieName, artworkName, sub) {
  const urls = [];
  if (!imagesNumber) return;
  if (imagesNumber) {
    for (let index = 0; index < imagesNumber; index += 1) {
      const url = urlBuilder({
        galerieName,
        artworkName,
        id: galerieName === "paintings" ? index : index + 1,
        askedSize,
        sub,
      });
      urls.push(url);
    }
    return urls;
  }
}

export function dynamicUrls(
  askedSize,
  nbOfImgs,
  galerieName,
  artworkName,
  subCollection,
) {
  let imagesNumber = nbOfImgs;
  let urlsList = [];

  if (galerieName === "illustrations") {
    if (subCollection && subCollection.length > 0) {
      subCollection.map((sub) => {
        imagesNumber = sub.imagesNumber;
        const fillUrls = getAllUrls(
          askedSize,
          imagesNumber,
          galerieName,
          artworkName,
          sub,
        );
        fillUrls.map((url) => {
          urlsList.push(url);
        });
      });
      return urlsList;
    }

    if (!subCollection) {
      urlsList = getAllUrls(askedSize, imagesNumber, galerieName, artworkName);
    }
  }

  if (galerieName === "paintings") {
    urlsList = getAllUrls(askedSize, imagesNumber, galerieName, artworkName);
  }

  return urlsList;
}
