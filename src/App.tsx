import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./data/store";
import { fetchDataRequest } from "./data/dataSlice";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <>
      {loading && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>}
      {data.map((item: any) => (
        <h5 key={item.id}>{item.title}</h5>
      ))}
    </>
  );
}

export default App;
