export function returnImgIndex(payload, imgIndex, ImgsListLength) {
  if (payload === "next") {
    return ImgsListLength - 1 < imgIndex + 1 ? 1 : imgIndex + 1;
  }
  if (payload === "previous") {
    return imgIndex - 1 < 1 ? ImgsListLength - 1 : imgIndex - 1;
  }
}

export function findIndex(list, url) {
  let id = 0;
  list?.find((imgInfos, index) => {
    if (imgInfos.url === url) {
      id = index;
    }
  });
  return id;
}
