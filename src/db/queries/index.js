/* eslint-disable no-useless-catch */
import { collection, doc, where, query, getDocs, getDoc, addDoc, updateDoc } from "firebase/firestore"
import  { db } from "../"

const resumesCol = collection(db, "resumes")
const resumeDocRef = id =>doc(db, "resumes", id)

const getAllResumes = async () => {
    try {
        const querySnapshot = await getDocs(resumesCol)
        const resumes = []

        querySnapshot.forEach((doc) => {
            resumes.push({ id: doc.id, ...doc.data() })
        })

        return resumes
    } catch (error) {
        throw error
    }
};


const getResume = async (id)=>{
    try {
        const snap = await getDoc(resumeDocRef(id))
        return snap.data()
    } catch (error) {
        throw error
    }
}

const findByEmail = async (email) => {
    try {
        const que = query(resumesCol, where("email", "==", email))
        const querySnapshot = await getDocs(que)
        if (!querySnapshot.empty) {
            const id = querySnapshot.docs[0].id
            const resume = querySnapshot.docs[0].data()
            return { id, ...resume }
        }else{
            null
        }
        
    } catch (error) {
        throw error
    }
}

const isEmailExist = async (email) => {
    try {
        const que = query(resumesCol, where("email", "==", email))
        const querySnapshot = await getDocs(que)
        return !querySnapshot.empty? querySnapshot.docs[0].id: null
    } catch (error) {
        throw error
    }
}

const addResume = async (resumeData) => {
    try {
        return await addDoc(resumesCol, resumeData)
    } catch (error) {
        throw error
    }
}

const updateResume = async (id, data) => {
    try {
        await updateDoc(resumeDocRef(id), data)
    } catch (error) {
        throw error
    }
};

export { getAllResumes, getResume, findByEmail, isEmailExist,  addResume, updateResume }