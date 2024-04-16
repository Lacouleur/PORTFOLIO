import urlBuilder from "./urlBuilder";

function buildId(galerieName, customIndex, index, customOrder) {
  if (!customOrder || customOrder?.length === 0) {
    return galerieName === "paintings" ? index : index + 1;
  }
  if (customOrder && customOrder?.length > 0) {
    return customIndex;
  }
}

function getAllUrls({
  askedSize,
  imagesNumber,
  galerieName,
  artWorkCategory,
  sub,
  customOrder,
}) {
  if (!imagesNumber) return;
  const urls = [];
  const customOrderLength = customOrder?.length || 0;

  const order = customOrder ? [...customOrder] : [];

  // build order, if custom order add normal index next
  if (order.length < imagesNumber) {
    for (let index = 0; index < imagesNumber; index += 1) {
      if (customOrderLength === 0) {
        order.push(index);
      }

      if (customOrderLength > 0 && !order.includes(index)) {
        if (galerieName === "paintings") {
          order.push(index);
        }
        if (galerieName === "illustrations" && index !== 0) {
          order.push(index);
        }
      }
    }
  }

  order.map((customIndex, index) => {
    if (imagesNumber) {
      const url = urlBuilder({
        galerieName,
        artWorkCategory,
        id: buildId(galerieName, customIndex, index, customOrder),
        askedSize,
        sub,
      });
      urls.push(url);
    }
  });

  return urls;
}

export function dynamicUrls({
  askedSize,
  nbOfImgs,
  galerieName,
  artWorkCategory,
  subCollection,
  customOrder,
}) {
  let imagesNumber = nbOfImgs;
  let urlsList = [];

  if (galerieName === "illustrations") {
    if (subCollection && subCollection.length > 0) {
      subCollection.map((sub) => {
        imagesNumber = sub.imagesNumber;
        const fillUrls = getAllUrls({
          askedSize,
          imagesNumber,
          galerieName,
          artWorkCategory,
          sub,
          customOrder,
        });
        fillUrls.map((url) => {
          urlsList.push(url);
        });
      });
      return urlsList;
    }

    if (!subCollection) {
      urlsList = getAllUrls({
        askedSize,
        imagesNumber,
        galerieName,
        artWorkCategory,
        customOrder,
      });
    }
  }

  if (galerieName === "paintings") {
    urlsList = getAllUrls({
      askedSize,
      imagesNumber,
      galerieName,
      artWorkCategory,
      customOrder,
    });
  }

  return urlsList;
}
