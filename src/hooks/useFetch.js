import { useState, useEffect } from "react";

// All firebase import here...
import { db } from "../firebase/Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const useFetch = (col) => {
    const [documents, setDocuments] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const colRef = collection(db, col);

        const unsub = onSnapshot(colRef, (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc)  => {
                results.push({id: doc.id, ...doc.data()})
            })
            setDocuments(results);
            setIsPending(false);
        })

        // chack if you can use the 'then' method on the unsub variable itself which is the onSnapshot...

        return unsub;
    }, [col])

    return { documents, isPending };

}

export default useFetch;