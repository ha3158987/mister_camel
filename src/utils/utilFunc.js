import brandName from './constants/brandName';
export const changeKoToEn = name => {
  switch (name) {
    case brandName.GUCCI.KO:
      return brandName.GUCCI.EN;
    case brandName.NIKE.KO:
      return brandName.NIKE.EN;
    case brandName.STONE_ISLAND.KO:
      return brandName.STONE_ISLAND.EN;
    case brandName.LOUIS_VUITTON.KO:
      return brandName.LOUIS_VUITTON.EN;
    default:
      break;
  }
};
