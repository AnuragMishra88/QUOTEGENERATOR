import React from "react";

import Spinner from "./Spinner";

function Quotes({ quote, fetching, loading }) {
  return (
    <>
      <div
        style={{
          margin: "auto",
          height: "600px",
          backgroundColor: "gray",
          width: "500px",
          border:"10px solid black",
          borderRadius:"50px"
        }}
      >
        <h1 style={{textDecoration:"underline"}}>Quote Generator</h1>
        <hr></hr>
        <p style={{ height: "300px", marginTop: "100px",fontSize:"20px",fontWeight:"bold"}}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <span style={{ fontSize: "60px", verticalAlign: "bottom" }}>
                &ldquo;
              </span>
              {quote[0]?.quote}
              <span style={{ fontSize: "60px", verticalAlign: "top" }}>
                &rdquo;
              </span>
            </>
          )}
          <br></br>
          <br></br>
          ~~{loading ?("")
          : (
            quote[0].author)
          }
        </p>
        <p>
          <br></br>
          <button
            onClick={fetching}
            className="btn"
            style={{ height: "50px", font: "40px", borderRadius: "20px" }}
          >
            Generate Quote
          </button>
        </p>
      </div>
    </>
  );
}

export default Quotes;
