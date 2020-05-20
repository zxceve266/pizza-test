import { firestoreAction } from 'vuexfire'
import { dbOrderRef } from '../../firebase'
const state ={
    orders: []
}
const getters ={
    numberOfOrder : state => state.orders.length,
    getOrder : state => state.orders
}
const mutations ={
    // addOrder : (state, orders) => {
    //     state.order.push(orders)
    // }
}
const actions ={
    setOrderRef:firestoreAction((context)=>{//讓本地 orders 與 firestore 'orders' 同步
    return context.bindFirestoreRef('orders',dbOrderRef.orderBy('createdAt'))
    }),

    addNewOrder : async (context, order) =>{ //新增order 到firestore
        try {
            await dbOrderRef.add(order)
        } catch (error) {
            alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
        }
    },
    removeOrderItem:async (context,id)=>{
        try {
            const orderItem = await dbOrderRef.doc(id)
            orderItem.delete()
        } catch (error) {
            alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
        }
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}