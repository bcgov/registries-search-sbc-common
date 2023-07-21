import { defineComponent, ref } from 'vue'

/**
 * Mixin that provides some useful validation utilities.
 */
export default defineComponent({
  /**
   * Creates a Vuetify rules object from the Vuelidate state.
   * @param model The name of the model we are validating.
   * @returns A Vuetify rules object.
   */
  createVuetifyRulesObject (model: string): { [attr: string]: Array<Function> } {
    const obj = {
      streetAddress: [],
      streetAddressAdditional: [],
      addressCity: [],
      addressRegion: [],
      postalCode: [],
      addressCountry: [],
      deliveryInstructions: []
    }

    // ensure Vuelidate state object is initialized
    if (this.$v && this.$v[model]) {
      // iterate over Vuelidate object properties
      Object.keys(this.$v[model])
        // only look at validation properties
        .filter(prop => prop.charAt(0) !== '$')
        .forEach(prop => {
          // create array for each validation property
          obj[prop] = []
          // iterate over validation property params
          Object.keys(this.$v[model][prop].$params)
            .forEach(param => {
              // add specified validation functions to array
              switch (param) {
                case 'required': obj[prop].push(() => this.requiredRule(model, prop)); break
                case 'minLength': obj[prop].push(() => this.minLengthRule(model, prop)); break
                case 'maxLength': obj[prop].push(() => this.maxLengthRule(model, prop)); break
                case 'isCanada': obj[prop].push(() => this.isCanadaRule(model, prop)); break
                case 'isBC': obj[prop].push(() => this.isBCRule(model, prop)); break
                // FUTURE: add extra validation functions here
                default: break
              }
            })
        })
    }

    // sample return object
    // streetAddress: [
    //   () => this.requiredRule('addressLocal', 'streetAddress'),
    //   () => this.minLengthRule('addressLocal', 'streetAddress'),
    //   () => this.maxLengthRule('addressLocal', 'streetAddress')
    // ],
    // ...

    return obj
  },

  /**
   * Misc Vuetify rules.
   * @param prop The name of the property object to validate.
   * @param key The name of the property key (field) to validate.
   * @returns True if the rule passes, otherwise an error string.
   */
  requiredRule (prop: string, key: string): boolean | string {
    return Boolean(this.$v[prop] && this.$v[prop][key].required) || 'This field is required'
  },

  minLengthRule (prop: string, key: string): boolean | string {
    const min = this.$v[prop][key].$params.minLength.min
    return Boolean(this.$v[prop] && this.$v[prop][key].minLength) || `Minimum length is ${min}`
  },

  maxLengthRule (prop: string, key: string): boolean | string {
    const max = this.$v[prop][key].$params.maxLength.max
    return Boolean(this.$v[prop] && this.$v[prop][key].maxLength) || `Maximum length is ${max}`
  },

  // FUTURE: generalize this rule to take a validation parameter (ie, 'CA')
  isCanadaRule (prop: string, key: string): boolean | string {
    return Boolean(this.$v[prop] && this.$v[prop][key].isCanada) || `Address must be in Canada`
  },

  // FUTURE: generalize this rule to take a validation parameter (ie, 'BC')
  isBCRule (prop: string, key: string): boolean | string {
    return Boolean(this.$v[prop] && this.$v[prop][key].isBC) || `Address must be in BC`
  }
})
