import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import ProductService from '../services/ProductService'
import type { Product } from '../interfaces/product'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'

// const title = ref<string>('')
// const description = ref<string>('')
// const price = ref<number>(0)
// const cost = ref<number>(0)

const useNewProduct = () => {
  const router = useRouter()

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      title: (value: string): boolean | string => {
        if (value?.length > 0) return true

        return 'El titulo es un valor requerido'
      },
      description: (value: string): boolean | string => {
        if (value?.length > 0) {
          if (value?.length > 100) return 'El valor maximo es 100 caracteres'

          return true
        }

        return 'Este valor es requerido'
      },
      price: (value: number) => {
        if (!value) return 'este valor es requerido'
        if (value < 0) return 'Introduzca un valor valido'
        if (value > 100) return 'El precio excede el limite establecido'

        return true
      },
      cost: (value: number) => {
        if (!value) return 'este valor es requerido'
        if (value < 0) return 'Introduzca un valor valido'
        if (value > 80) return 'El Costo excede el limite establecido'

        return true
      }
    }
  })

  const { value: title, errorMessage: titleErrorMessage } = useField<string>('title')
  const { value: description, errorMessage: descriptionErrorMessage } = useField<string>('description')
  const { value: price, errorMessage: priceErrorMessage } = useField<number>('price')
  const { value: cost, errorMessage: costErrorMessage } = useField<number>('cost')

  // const submit = async () => {
  //   const form: Product = {
  //     id: uuidv4(),
  //     title: title.value,
  //     description: description.value,
  //     price: price.value,
  //     cost: cost.value
  //   }

  //   const res = await ProductService.createNewProduct(form)
  //   if (res) {
  //     reset()
  //     router.push('/')
  //   }
  // }

  const submit = handleSubmit(async (values) => {
    const form = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      price: values.price,
      cost: values.cost
    }

    const res = await ProductService.createNewProduct(form)
    if (res) {
      reset()
      router.push('/')
    }
  })

  const reset = () => {
    title.value = ''
    description.value = ''
    ;(price.value = 0), (cost.value = 0)
  }

  return {
    title,
    titleErrorMessage,
    description,
    descriptionErrorMessage,
    price,
    priceErrorMessage,
    cost,
    costErrorMessage,
    submit
  }
}

export default useNewProduct
