// src/utils/cropMeta.js

import defaultImg from "../assets/crops/default.jpg";

export const cropMeta = {
  rice: {
    info: "Rice grows well in water-retentive soil with warm climate."
  },
  wheat: {
    info: "Wheat prefers cooler climate and moderate rainfall."
  },
  maize: {
    info: "Maize grows well in well-drained soil and moderate temperature."
  },
  cotton: {
    info: "Cotton prefers black soil and warm dry climate."
  },
  sugarcane: {
    info: "Sugarcane requires high rainfall and long growing season."
  },
  jute: {
    info: "Jute grows well in humid climate with fertile soil."
  },
  papaya: {
    info: "Papaya prefers well-drained soil and warm temperature."
  }
};

export const defaultCropMeta = {
  image: defaultImg,
  info: "This crop is suitable for the given soil and weather conditions."
};
