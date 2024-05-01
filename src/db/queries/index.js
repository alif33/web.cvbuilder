/* eslint-disable no-useless-catch */
import  { db } from "../"
import { doc, getDoc } from "firebase/firestore"

const resumeDocRef = id =>doc(db, "resumes", id)

const getResume = (id)=>{
    try {
        const snap = getDoc(resumeDocRef(id))
        return snap.data()
    } catch (error) {
        throw error
    }
}

export { getResume }