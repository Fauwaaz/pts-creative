"use client";

import React, { useState, useEffect } from 'react';

export async function HandleApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; 
  } catch (err) {
    console.error(err);
  }
}

const Actions = () => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const fetchedData = await HandleApi();
        setData(fetchedData); 
      } catch (error) {
        console.error(error); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
    
  }, []); 

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (data) {
    return <div>Fetched data: {JSON.stringify(data)}</div>; 
  }

  return <p>Please wait...</p>;
};

export default Actions;