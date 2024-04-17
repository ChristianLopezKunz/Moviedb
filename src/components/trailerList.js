import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useFetchTrailerQuery } from "../store";

export default function TrailerList(){
    const { id } = useParams();
    const [trailerurl, setTrailerUrl] = useState("");

    const { data, error, isFetching } = useFetchTrailerQuery(id);

    useEffect(() => {
        if (data && data.results.length > 0) {
            const firstVideo = data.results[0];
            const url = `http://www.youtube.com/embed/${firstVideo.key}`;
            setTrailerUrl(url); 
        }
    }, [data]);

  if (isFetching) { return <div>Loading;</div>} 
  else if (error) { return <div>Error loading movies.</div>;}

    return (
    <>
        <div>
            <h2>{"Trailer"}</h2>
            <iframe
            title="Trailer" 
            width="560"
            height="320"
            src={trailerurl}
            allowFullScreen
            ></iframe>
        </div>
    </>
  );
}