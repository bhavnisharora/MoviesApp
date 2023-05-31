import React, { useState} from "react";
import "./Movie.css";
import axios from "axios";
const Movie = () => {
    const [text, settext] = useState(true);
    const [movie, setmovie] = useState();
    //   const [status, setStatus] = useState("");

    const getdata = (e) => {
        e.preventDefault();
        // setStatus("pending");
        try {
            axios
                .get(`https://www.omdbapi.com/?s=${text}&apikey=e99c1d7c`)
                .then((res) => {
                    console.log(res);
                    setmovie(res.data.Search);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const changedata = (e) => {
        settext(e.target.value);
    };

    //   useEffect(() => {
    //     if (movie && movie.length > 0) {
    //       setStatus("completed");
    //     }
    //   }, [status, movie]);

    //   if (status === "pending") {
    //     return (
    //       <div
    //         style={{
    //           width: "100%",
    //           height: "100vh",
    //           display: "grid",
    //           placeContent: "center",
    //           backgroundColor: "red",
    //         }}
    //       >
    //         <h1 style={{ fontSize: "5rem", color: "black" }}>Loading...</h1>
    //       </div>
    //     );
    //   }
    return (
        <>
            <h1 className="title">MovieZone</h1>
            <form action="" onSubmit={getdata} className="set-form">
                <input
                    type="text"
                    placeholder="search a movie"
                    className="input-field"
                    onChange={changedata}
                />

                <input type="submit" value="search" disabled={text.length === 0} />
            </form>
            {movie && movie.length > 0 && <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Here are some results.....</h4>}
            {!movie && <h4 style={{ color: "black", textAlign: 'center', marginTop: '20px' }}>No data found!</h4>}
            <div className="cards-container">

                {movie?.length > 0 &&
                    movie.map((value, i) => {
                        return (
                            <>
                                    <div key={i} className="cards">
                                        <img src={value.Poster} alt="not available" />
                                        <h1>{value.Title.slice(0, 15)}</h1>
                                        <h2 style={{ color: "blue" }}>{value.Year}</h2>
                                    </div>
                            </>
                        );
                    })
                }

                {/* {
                    text.length > 0 && text==true && <p>loading...</p> 
                } */}
            </div>
        </>
    );
};

export default Movie;
