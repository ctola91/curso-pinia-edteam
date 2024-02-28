import { useProductStore } from "@/stores/product"
import { storeToRefs } from "pinia"
import { onMounted } from "vue"
import ProductService from "../services/ProductService"


const useProducts = () => {
  const store = useProductStore()
  const { products } = storeToRefs(store)

  onMounted(async () => {
    await fetchProducts()
  })

  const fetchProducts = async () => {
    const ps = await ProductService.getProducts()
    store.setProducts(ps)
  }

  return {
    products
  }
}

export default useProducts
