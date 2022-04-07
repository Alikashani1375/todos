import React, { useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../App.css";
import Todos from "./Todos";
function FetchTodos() {
  const results = [];
  const [datas, setDatas] = useState([]);
  const db = ref(getDatabase());
  const userid = useSelector((state) => state.userid);

  useEffect(() => {
    get(child(db, "data/" + userid)).then((snapshot) => {
      for (let key in snapshot.val()) {
        results.push({
          ...snapshot.val()[key],
          id: key,
        });
      }
      setDatas(results);
    });
  });

  return (
    <div className="d-flex flex-wrap mt-3 mx-auto fetchtodos ">
      {datas.map((data, pos) => (
        <Todos
          todo={data.todo}
          color={data.color}
          id={data.id}
          key={pos}
          date={data.date}
        />
      ))}
    </div>
  );
}

export default FetchTodos;
