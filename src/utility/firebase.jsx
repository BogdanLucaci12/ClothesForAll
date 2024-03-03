// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs, updateDoc } from "firebase/firestore"
import { getStorage, ref, getDownloadURL} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCYU60dxwzp-TddLRL50AEPqLZHdQXd-bA",
    authDomain: "clothesforall-4ad3e.firebaseapp.com",
    projectId: "clothesforall-4ad3e",
    storageBucket: "clothesforall-4ad3e.appspot.com",
    messagingSenderId: "887978649362",
    appId: "1:887978649362:web:c98f0e01f724f1bff275cb",
    measurementId: "G-DRBZB1EC7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});
const storage = getStorage(app);
export const auth = getAuth(app);
export const signInWithGooglePopUp= () =>signInWithPopup(auth, provider);
export const signOutUser= async()=> await signOut(auth);
export const db= getFirestore();
export const createUserDocumentFromAuth = async (userAuth, nume)=>{
    if(!userAuth) return;
const userDocRef=doc(db, 'users', userAuth.uid)
const userSnapshot= await getDoc(userDocRef);
if(!userSnapshot.exists()){
    const {displayName, email}=userAuth;
    const userName = displayName == null ? nume : displayName;
    const additionalInfo = {
        telefon:"",
        alias:"",
        dataNasterii: {
            an:"",
            luna:"",
            ziua:""
            }
    }
    const createdAt= new Date();
    try{
     await setDoc(userDocRef, {
        userName,
        email,
        createdAt,
       additionalInfo
     })
    }
    catch(error){
       console.log('error creating the user', error.message)
    }
}
return userDocRef;
}
export const createAuthUserWithEmailAndPassword= async(email, password)=>{
  if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}
export const getImagebyUrl = async(imageUrl) => {
    try {
        if (!imageUrl) return
        const storageRef = ref(storage, imageUrl);
        const url = await getDownloadURL(storageRef);
       return url
    } catch (error) {
        console.error('Error fetching download URL:', error);
    }
};

export const getCategoriesAndDocuments= async(categorie)=>{
const collectionRef = collection(db, categorie);
const q=query(collectionRef)
const querySnapshot=await getDocs(q)
const categoryMap=querySnapshot.docs.reduce((acc, docSnapshot)=>{
    
    const {items, Items } = docSnapshot.data();
    acc = acc.concat(items || Items || []);
    return acc;
}, []);
    return categoryMap;
}
export const getUserDisplayName = async (userAuth) => {
    if (userAuth) {
        const userDocRef = doc(db, 'users', userAuth.uid);
        try {
            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                const displayName = userData.userName;
                return displayName;
            } else {
                console.log("Documentul pentru UID-ul dat nu există.");
            }
        } catch (error) {
            console.error("Eroare la obținerea datelor din Firestore:", error);
        }
    } else {
        console.log("UID-ul utilizatorului nu este valid.");
    }
};
export const SearchDatabases=async()=>{
    try{
        const dbbarbati = await getDocs(collection(db, "barbati"));
        const dbfemei =await getDocs(collection(db, "femei"));
        const dbcopii = await getDocs(collection(db, "copii"));
        const databarbati=dbbarbati.docs.reduce((acc, docSnapshot) =>{
            const {items, Items}=docSnapshot.data();
            acc = acc.concat(items || Items || []);
            return acc;
        }, []);
        
        const datafemei = dbfemei.docs.reduce((acc, docSnapshot) => {

            const { items, Items } = docSnapshot.data();
            acc = acc.concat(items || Items || []);
            return acc;
        }, []);

        const datacopii = dbcopii.docs.reduce((acc, docSnapshot) => {

            const { items, Items } = docSnapshot.data();
            acc = acc.concat(items || Items || []);
            return acc;
        }, []);

        const allItemInDb=[...databarbati, ...datafemei, ...datacopii]
        return allItemInDb
    }catch(error){
        console.error("Eroare la căutarea în bazele de date:", error);
    }
}

export const getUserCollection=async (useruid) =>{
    if (useruid){
        const usercollection = doc(db, "users", useruid);
            try{
                const snapshot = await getDoc(usercollection)
                if(snapshot.exists()){
                const userCollectionDetails=snapshot.data();
                return userCollectionDetails
                }
            }
            catch(error){
                console.log(error)
            }
    }
}

export const UpdateUserCollection = async (useruid, userName, alias, telefon)=>{
try{
    const userDocRef = doc(db, 'users', useruid)
    await updateDoc(userDocRef, {
        userName: userName,
        additionalInfo:{
            alias: alias,
            telefon: telefon
        }
    });
}
catch(err){
    console.log(err)
}
}

export const AddAdress = async (useruid, nume, telefon, judet, localitate, adresa) => {
   if(useruid){
       const userDocRef = doc(db, 'users', useruid);
       const userSnapshot = await getDoc(userDocRef);
       const adress=userSnapshot.data().adress;
      if(!adress){
              await updateDoc(userDocRef, {
                adress:
                    [{
                        nume:nume,
                        telefon:telefon,
                        judet:judet,
                        localitate:localitate,
                        adresa:adresa
                    }]
              }, 
              {merge:true}
            )
      }
   else{
          const newAddress = {
              nume: nume,
              telefon: telefon,
              judet: judet,
              localitate: localitate,
              adresa: adresa
          };
          const updatedAdressArray = [...adress, newAddress];
          await updateDoc(userDocRef, {
             adress:updatedAdressArray
          }
          )
   }
   }
}
