import React, { useState,useEffect } from 'react'

export default function useFetch(url) {
    const [movie ,setMovie]= useState([])
    const [ispending ,setisPending]= useState(true)
    const [error ,setError]= useState(null)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(datas=>{setMovie(datas)
            setisPending(false)
            setError(null)

        }).catch(err=>console.log(err)
        )
    },[])
   
    return {movie,ispending,error,setMovie}
}
