import axios from "@/config/axios"

class ProductService {
    async addProduct(params) {
        try {
            const data = axios.post('/add-new-product', params)
            return data
        } catch (error) {
            throw error
        }
    }

    async getProducts(params) {
        try {
            const data = axios.post('/get-products', params)
            return data
        } catch (error) {
            throw error
        }
    }

    async deleteProducts(params){
        try {
            const data = axios.post('/delete-products', params)
            return data
        } catch (error) {
            throw error
        }
    }

    async getProductById(params){
        try {
            const data = axios.post('/get-product-by-id', params)
            return data
        } catch (error) {
            throw error
        }
    }
    
    async updateProduct(params){
        try {
            const data = axios.post('/update-product', params)
            return data
        } catch (error) {
            throw error
        }
    }

    async changeStateProduct(params){
        try {
            const data = axios.post('/change-status-product', params)
            return data
        } catch (error) {
            throw error
        }
    }
}

export default new ProductService() 