import { useProductStore } from "@/stores/product"
import { storeToRefs } from "pinia"
import ProductService from "../services/ProductService"
import { onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { Product } from "../interfaces/product"

const form = reactive({
  id: '',
  title: '',
  description: '',
  price: 0,
  cost: 0
})
const isEditing = ref<boolean>(false)

const useProduct = () => {
  const store = useProductStore()
  const route = useRoute()
  const router = useRouter()

  const { productSelected } = storeToRefs(store)

  onMounted(async () => {
    await fetchProduct(route.params.id as string)

    form.id = route.params.id as string
    form.title = productSelected.value?.title as string
    form.description = productSelected.value?.description as string
    form.price = productSelected.value?.price as number
    form.cost = productSelected.value?.cost as number
  })

  const fetchProduct = async (id: string) => {
    const p = await ProductService.getProductById(id)

    store.setProductSelected(p)
  }

  const deleteProduct = async () => {
    const p = await ProductService.deleteProduct(productSelected.value as Product)
    if(p) {
      // volver al home
      router.push('/')
    }
  }

  const updateProduct = async () => {
    const p = await ProductService.updateProduct(form)

    if(p) {
      store.setProductSelected(p)
      isEditing.value = false
    }
  }

  return {
    productSelected,
    isEditing,
    form,
    deleteProduct,
    updateProduct
  }
}

export default useProduct
