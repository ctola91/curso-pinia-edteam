import type { Product } from '@/products/interfaces/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>(JSON.parse(localStorage.getItem("products") as string))
  const productSelected = ref<Product>()

  const setProducts = (newProducts: Product[]) => {
    localStorage.setItem("products", JSON.stringify(newProducts))
    products.value = newProducts
  }

  const setProductSelected = (newProductSelected: Product) => {
    productSelected.value = newProductSelected
  }

  return {
    // state
    products,
    productSelected,
    // actions
    setProducts,
    setProductSelected
  }
})
