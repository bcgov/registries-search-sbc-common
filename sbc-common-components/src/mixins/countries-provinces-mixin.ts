// Import the necessary modules from Vue 3
import { defineComponent, ref } from 'vue'

// global caching to improve performance when called multiple times
const countryNameCache: Record<string, string> = {}
const countryRegionsCache: Record<string, Array<object>> = {}

export default defineComponent({
  name: 'CountriesProvincesMixin',
  methods: {
    /**
     * Helper function to return a list of countries.
     * @returns An array of country objects, sorted alphabetically.
     */
    getCountries (): Array<object> {
      return window['countries']
    },

    /**
     * Helper function to return a country's name.
     * @param code The short code of the country.
     * @returns The long name of the country.
     */
    getCountryName (code: string): string {
      if (!code) return null
      if (countryNameCache[code]) return countryNameCache[code]
      const country = window['countries'].find((c: { code: string }) => c.code === code)
      const result = country ? country.name : null
      countryNameCache[code] = result
      return result
    },

    /**
     * Helper function to return a country's list of provinces.
     * @param code The short code of the country.
     * @returns An array of province objects, sorted alphabetically.
     */
    getCountryRegions (code: string): Array<object> {
      if (!code) return null
      if (countryRegionsCache[code]) return countryRegionsCache[code]
      const result = window['provinces']
        .filter((p: { country: string }) => p.country === code)
        .map((p: { english: string, name: string, short: string }) => ({
          name: p.english || p.name,
          short: (p.short && p.short.length <= 2) ? p.short : '--'
        }))
      countryRegionsCache[code] = result
      return result
    }
  }
})
