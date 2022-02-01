import poster1 from "./assets/corousel-1.jpg";
import poster2 from "./assets/corousel-2.jpg";
import poster3 from "./assets/corousel-3.jpg";
import poster4 from "./assets/corousel-4.jpg";
import haircare from "./assets/Items/haircare.jpg";
import skincare from "./assets/Items/skincare.jpg";
import makeup from "./assets/Items/makeup.jpg";
import hairOil from "./assets/Items/hair-oil.jpg";
import hairMask from "./assets/Items/hair-mask.jpg";
import hairShampoo from "./assets/Items/hair-shampoo.jpg";
import hairSerum from "./assets/Items/hair-serum.jpg";
import makeLiner from "./assets/Items/make-liner.jpg";
import makeLip from "./assets/Items/make-lip.jpg";
import makePrimer from "./assets/Items/make-primer.jpg";
import makeShadow from "./assets/Items/make-shadow.jpg";
import skinBalm from "./assets/Items/skin-balm.jpg";
import skinEssence from "./assets/Items/skin-essence.jpg";
import skinMoisturiser from "./assets/Items/skin-moisturiser.jpg";
import skinSun from "./assets/Items/skin-sun-scream.jpg";

export const sliderItems = [
  {
    id: 1,
    img: { poster1 },
    title: "WINTER SALE",
    desc: "DON'T COMPROMISE ON FASHION! GET FLAT 30% OFF FOR THE YEAR END SALE",
    bg: "fcf1ed",
  },
  {
    id: 2,
    img: { poster2 },
    title: "YEAR END SALE",
    desc: "NEVER GIVE UP ON FASHION! GET FLAT 30% OFF FOR THE UPCOMING VALENTINE'S DAY",
    bg: "f5fafd",
  },
  {
    id: 3,
    img: { poster3 },
    title: "NEW YEAR SALE",
    desc: "GIVE A SKIN PROMISING NOURISHMENT! GET FLAT 30% OFF FOR THE NEW YEAR SALE",
    bg: "fbf0f4",
  },
  {
    id: 4,
    img: { poster4 },
    title: "NEW ARRIVALS",
    desc: "BUDGET SHOPPING ON FASHION! GET FLAT 30% OFF FOR THE NEW ARRIVALS",
    bg: "f5fafd",
  },
];
export const categories = [
  {
    id: 1,
    img: { skincare },
    title: "For healthy Skin",
    cat: "skincare",
  },
  {
    id: 2,
    img: { haircare },
    title: "Crown you never take off",
    cat: "haircare",
  },
  {
    id: 3,
    img: { makeup },
    title: "Shine like Diamond",
    cat: "makeup",
  },
];
export const popularProducts = [
  { id: 1, img: { hairOil }, title: "Hair Oil", pro: "hairOil", price: 5 },
  { id: 2, img: { hairMask }, title: "Hair Mask", pro: "hairMask", price: 7 },
  {
    id: 3,
    img: { hairShampoo },
    title: "Shampoo",
    pro: "hairShampoo",
    price: 10,
  },
  {
    id: 4,
    img: { hairSerum },
    pro: "hairSerum",
    title: "Hair Serum",
    price: 10,
  },
  { id: 5, img: { makeLiner }, pro: "makeLiner", title: "Eye Liner", price: 6 },
  { id: 6, img: { makeLip }, pro: "makeLip", title: "Lip Stick", price: 3 },
  { id: 7, img: { makePrimer }, pro: "makePrimer", title: "Primer", price: 10 },
  { id: 8, img: { makeShadow }, pro: "makeShadow", title: "Shadow", price: 12 },
  { id: 9, img: { skinBalm }, pro: "skinBalm", title: "Lip Balm", price: 3 },
  {
    id: 10,
    img: { skinEssence },
    pro: "skinEssence",
    title: "Essence",
    price: 10,
  },
  {
    id: 11,
    img: { skinMoisturiser },
    pro: "skinMoisturiser",
    title: "Moisturiser",
    price: 7,
  },
  { id: 12, img: { skinSun }, pro: "skinSun", title: "Sun Screen", price: 6 },
];
