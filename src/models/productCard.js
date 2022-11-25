import { reactive } from "vue";

export const productCard = reactive({
  productCard: {},

  // productCardShortDescription: "",

  productCardFullDescription: "",

  async getShortDescription(productObject) {
    let module = await import(`@/models/${productObject.productType}`)
    let moduleData = module[productObject.productType]
    moduleData.set(productObject)
    return moduleData.getShortDescription()
  },

  async getFullDescription(productObject) {
    this.productCardFullDescription = ""
    let module = await import(`@/models/${productObject.productType}`)
    let moduleData = module[productObject.productType]
    moduleData.set(productObject)
    // moduleData.getFullDescription().forEach((value, key) => {
    //                          this.productCardFullDescription += `${key}: ${value} <br>`
    //                      })
    // return this.productCardFullDescription
    return moduleData.getFullDescription()
  },
});
