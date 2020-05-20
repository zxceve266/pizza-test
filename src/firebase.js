import firebase from 'firebase/app'
import 'firebase/firestore'//雲端資料庫
import 'firebase/auth'//身分認證

const firebaseConfig = { //firebase專案設定 要去官網取得貼上
    apiKey: "AIzaSyCgvBzPBJ1JzGsZdCD9hQ_OdZNo2tRevBs",
    authDomain: "pizza-planet-407f2.firebaseapp.com",
    databaseURL: "https://pizza-planet-407f2.firebaseio.com",
    projectId: "pizza-planet-407f2",
    storageBucket: "pizza-planet-407f2.appspot.com",
    messagingSenderId: "1005535062340",
    appId: "1:1005535062340:web:2d663124032062a05ecf11"
};

firebase.initializeApp(firebaseConfig) //啟用
const db = firebase.firestore() //資料庫


export const firebaseAuth = firebase.auth()//身分認證方法
export const dbMenuRef = db.collection('menu')//資料庫Menu方法
export const dbOrderRef = db.collection('orders')//資料庫Order方法
