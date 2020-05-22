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
  setMenuRef : firestoreAction( async (context)=>{ //讓本地 menuItems 與 firestore 'menu' 同步
    await context.bindFirestoreRef('menuItems',dbMenuRef.orderBy('createdAt'))
    context.commit('NotLoading')
  }),



  addNewPizza: async (context,pizza) => {//新增pizza 到firestore
    try {
      await dbMenuRef.add(pizza)
    } catch (error) {
      alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
    }
  },

  removeMenuItem: (context,id) =>{//刪除pizza 到firestore "寫法一 promise"
    function removeItem(id){
      return new Promise((resolve,reject)=>{
          resolve(dbMenuRef.doc(id))
          reject()
      })
    }
    removeItem(id)
    .then((res)=>{res.delete()})
    .catch((err)=>{console.log(err)})
  },
  // removeMenuItem: async (context,id) =>{//刪除pizza 到firestore "寫法二 async await"
  //   try {
  //     const item = await dbMenuRef.doc(id)
  //     item.delete()
  //   } catch (error) {
  //     alert(`sorry 發生一些錯誤 請再試一次! ${error}`)
  //   }
  // }
}

export default {
    state,
    mutations,
    getters,
    actions
}