"use client";

function Loading() {
  return (
    <div style={{
      height: "85vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center"
    }}>
       <span className="loading">Loading...</span>
    </div>
  );
}

export default Loading;