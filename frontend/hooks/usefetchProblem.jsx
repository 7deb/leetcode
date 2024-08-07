import React, { useEffect, useState } from 'react'

const usefetchProblem = () => {

    const [problems,setProblems] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] = usestate(null);

    useEffect(()=>{
        const fetchProblems = async ()=>{
            try{
                const response = await fetch("http://localhost:4000/api/problems");
                const data = await response.json();
                setProblems(data.problems);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        fetchProblems();
    },[]);
return{problems,loading,error};
}

export default usefetchProblem
