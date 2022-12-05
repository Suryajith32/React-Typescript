import { db } from "../config/firebaseConfig/firebase"
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from "firebase/firestore"

const userCollection = collection(db, "users")
class userDataServices {
    addUser = (newUser: any) => {
        return addDoc(userCollection, newUser);
    }
    deleteUser = (id: any) => {
        const user = doc(db, "users", id)
        return deleteDoc(user);
    }
    getAllUser = () => {
        return getDocs(userCollection);
    }
    // getAuser = () => {
    //     return getDoc()
    // }
}

export default new userDataServices();