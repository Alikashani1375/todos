import React from "react";
import "../App.css";
import { getDatabase, ref, remove } from "firebase/database";
import { useSelector } from "react-redux";

function Todos(props) {
  const userid = useSelector((state) => state.userid);
  const db = getDatabase();
  const id = props.id;
  const deletetodo = async () => {
    await remove(ref(db, "data/" + userid + "/" + id)).then(alert("deleted"));
  };

  return (
    <div className="todocontainer mt-3 mx-auto">
      <div id="todolist" className={props.color}>
        <div className="ms-auto me-3 bold">
          <div className="date">{props.date}</div>
        </div>
        <div className="todo p-3 small mt-2">{props.todo}</div>
        <div className="ms-auto me-3 mt-3">
          <button
            onClick={deletetodo}
            key={props.id}
            className="btn btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todos;
