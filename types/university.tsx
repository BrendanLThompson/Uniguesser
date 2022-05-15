import firestore from "../composables/useDb.tsx";
import React,{useState,useEffect} from 'react';

function getUniversity() {    
    const [university, setUniversity]=useState([]);

    useEffect(() => {
        fetchUniversity();
    }, []);

    const fetchUniversity=async()=>{
        const response=firestore.collection('university');
        let docID = getRandomInt(82);
        const data=await response.get(docID).then((documentSnapshot)=> {
            if(documentSnapshot.exist)
            {
                console.log("name: ",documentSnapshot.data());
            }
        });
        data.docs.forEach(item=>{
            setUniversity([...university,item.data()]);
        });
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
    <div className="getUniversity">    
        {    
        university && university.map(university=>{    
            return(    
            <div className="university-container">    
                <h4>{university.title}</h4>    
                <p>{university.body}</p>    
            </div>    
            )    
        })    
        }    
    </div>    
    );
}

export default getUniversity;