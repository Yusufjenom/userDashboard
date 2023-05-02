import { Router } from "react-router-dom"

export const getOrders = () => {
    return fetch('https://dummyjson.com/carts/1')
    .then((res) => res.json())
}

export const getRevenue = () => {
    return fetch('https://dummyjson.com/carts')
    .then((res) => res.json())
}

export const getInventory = () => {
    return fetch('https://dummyjson.com/products')
    .then((res) => res.json())
}
export const getCustomers = () => {
    return fetch('https://dummyjson.com/users')
    .then((res) => res.json())
}
export const getComments = () => {
    return fetch('https://dummyjson.com/comments')
    .then((res) => res.json())
}
// export const getOrders = () => {
//     return fetch('https://dummyjson.com/orders')
//     .then((res) => res.json())
// }

// const appointmentSchema = new mongoose.Schema({
//         userId:{
//          type: String,
//          required: true
//         },
//         workerId:{
//          type: String,
//          required: true
//         },
//         workerInfo:{
//             type: String,
//             required: true
//            },
//         userInfo:{
//             type: String,
//             required: true
//            },
//         data:{
//             type: String,
//             required: true
//            },
//         status:{
//             type: String,
//             required: true
//            },
//         time:{
//             type: String,
//             required: true
//            },

//     }, {timeStamps: true}
              
// )
// const appointmentModel = mongoose.model('appointments', appointmentSchema)

// //boo appointment

// Router.post('/boo-appointment', bookAppointmentController)