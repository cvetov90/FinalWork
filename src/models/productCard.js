import { reactive } from "vue";

export const productCard = reactive({
  productCard: {},

  productCardShortDescription: "",

  productCardFullDescription: "",

  getShortDescription() {
    import(`@/models/${this.productCard.productType}`)
    .then((obj) => {
      obj[this.productCard.productType].set(this.productCard);
      this.productCardShortDescription = obj[this.productCard.productType].getShortDescription()
      return this.productCardShortDescription
    })
  },

  getFullDescription() {
    import(`@/models/${this.productCard.productType}`)
    .then((obj) => {
      obj[this.productCard.productType].set(this.productCard);
                obj[this.productCard.productType].getFullDescription().forEach((value, key) => {
                           this.productCardFullDescription += `${key}: ${value} <br>`
                       })
      return this.productCardFullDescription
    })
  },
});
