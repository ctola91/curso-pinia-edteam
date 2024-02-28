import api from '@/api/api'
import type { Product } from '@/products/interfaces/product'

const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get(`/products`)

  return data
}

const getProductById = async (id: string): Promise<Product> => {
  const { data } = await api.get(`/products/${id}`)

  return data
}

const createNewProduct = async (newProduct: Product): Promise<Product> => {
  const { data } = await api.post(`/products`, newProduct)

  return data
}

const deleteProduct = async (product: Product): Promise<Product> => {
  const { data } = await api.delete(`/products/${product.id}`)

  return data
}

const updateProduct = async (product: Product): Promise<Product> => {
  const { data } = await api.put(`/products/${product.id}`, { ...product })

  return data
}

export default {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProduct,
  updateProduct
}
