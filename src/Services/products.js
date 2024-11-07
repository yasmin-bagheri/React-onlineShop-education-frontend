import { instance } from "./interseptor";



export const getProducts =async()=>{
    try {
        const url = "products"
        const response =await instance.get(url,{
            signal : AbortController.signal
        })
        // console.log(response.data);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }

}
export const getSingleProduct =async(id)=>{
    try {
        const url = `products/${id}`
        const response =await instance.get(url,{
            signal : AbortController.signal
        })
        // console.log(response.data);
        return response.data

        
    } catch (error) {
        
    }
}


export const putProducts =async(body,id)=>{
    try {
        const url = `products/${id}`
        const response =await instance.put(url,body)
        console.log(response.data);
        return response
        
    } catch (error) {
        console.log(error);
        
    }

}



export const deleteProducts =async(id)=>{
    try {
        const url = `products/${id}`
        const response =await instance.delete(url)
        console.log(response.data);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }

}

export const postProducts =async(body)=>{
    try {
        const url = `users/register`
        const response =await instance.post(url,body)
        console.log(response.data);
        return response
        
    } catch (error) {
        console.log(error);
        
    }

}