import { firestoreAction } from 'vuexfire' 
import { dbMenuRef } from '../../firebase' //導入資料庫方法
const state = {
  menuItems: []
}

const getters = {
    getMenuItems : state => state.menuItems
}

const mutations = {

}

const actions = {
  setMenuRef : firestoreAction((context)=>{ //讓本地 menuItems 與 firestore 'menu' 同步
    return context.bindFirestoreRef('menuItems',dbMenuRef.orderBy('createdAt'))
  }),
  addNewPizza: async (context,pizza) => {//新增pizza 到firestore
    try {
      await dbMenuRef.add(pizza)
    } catch (error) {
      alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
    }
  },
  removeMenuItem: async (context,id) =>{//刪除pizza 到firestore
    try {
      const item = await dbMenuRef.doc(id)
      item.delete()
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