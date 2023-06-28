import React, { useEffect, useState } from 'react'
import {collection, getDocs, limit, orderBy, query} from "firebase/firestore"
import {db} from "../firebase"
import Spinner from "../components/Spinner"

export default function Slider() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      const listingsRef = collection(db,"listings")
      // query
      const q = query(listingsRef, orderBy("timestamp","desc"), limit(5))
      const querySnap = await getDocs(q)
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings(listings)
      setLoading(false)
      // console.log(listings)
    }
    fetchListings()
  }, [])
  if(loading){
    return <Spinner/>
  }
  if(listings.length === 0){
    return <></>;
  }

  return (
    listings && (
    <>
      {listings.map((listing) => (
        <h1 key={listing.id}>{listing.data.imgUrls[0]}</h1>
      ))}
    </>
    )
  )
}
