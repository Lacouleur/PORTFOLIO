import illustrationsInfos from "../texts/imagesInfos/illustrationsInfos.json";

export function getImageMetaBase(imgInfos, galerieName) {
  if (!imgInfos || galerieName === "paintings") return;

  if (imgInfos && imgInfos?.meta) {
    if (imgInfos.meta?.subName) {
      return illustrationsInfos[imgInfos.meta.title][imgInfos.meta.subName][
        imgInfos.meta.id
      ];
    }
    return illustrationsInfos[imgInfos.meta.artWorkCategory][imgInfos.meta.id];
  }
  return;
}
