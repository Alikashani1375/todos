import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addfn,
  addln,
  addtodo,
  adddate,
  addcolor,
} from "../components/redux/dataActions";
import "../App.css";
import { getDatabase, ref, push } from "firebase/database";

function Addtodo() {
  const firstname = useSelector((state) => state.firstName);
  const lastname = useSelector((state) => state.lastName);
  const color = useSelector((state) => state.color);
  const todo = useSelector((state) => state.todo);
  const date = useSelector((state) => state.date);
  const userid = useSelector((state) => state.userid);

  const postData = () => {
    const db = getDatabase();
    push(ref(db, "data/" + userid), {
      firstname: firstname,
      lastname: lastname,
      color: color,
      todo: todo,
      date: date,
    });
  };

  const changecolor = (e) => {
    dispatch(addcolor(e.target.value));
    let color = document.getElementById("value1");
    var value = color.options[color.selectedIndex].value;
    color.className = value;
  };

  const dispatch = useDispatch();

  return (
    <div className="Bgcontainer w-50 mx-auto mt-5 text-center">
      <div className="flex-column pt-5">
        <div className="w-75 mx-auto flex-column">
          <div className="mx-auto blockquote">FirstName :</div>
          <input
            type="text"
            className="w-75 mx-auto p-2 Bginput text-center blockquote"
            onChange={(e) => dispatch(addfn(e.target.value))}
          />
        </div>
        <div className="w-75 mx-auto flex-column">
          <div className="mx-auto blockquote">LastName :</div>
          <input
            type="text"
            className="w-75 mx-auto p-2 Bginput text-center blockquote"
            onChange={(e) => dispatch(addln(e.target.value))}
          />
        </div>
        <div className="w-75 mx-auto flex-column">
          <div className="mx-auto blockquote">YourTodo :</div>
          <textarea
            type="text"
            className="w-75 mx-auto Bginput text-center blockquote h-auto"
            onChange={(e) => dispatch(addtodo(e.target.value))}
          />
        </div>

        <div className="mx-auto flex-column">
          <div className="mx-auto blockquote">Date & Color :</div>
          <div className="mx-auto">
            <input
              type="date"
              className="w-auto mx-auto p-2 me-3 Bginput"
              id="date"
              onChange={(e) => dispatch(adddate(e.target.value))}
            />
            <select
              className="w-auto mx-auto p-2 Bginput rounded"
              aria-label="Default select example"
              id="value1"
              onChange={changecolor}
            >
              <option>Choose Your Color</option>
              <option className="bg-dark" type="color" value="bg-dark"></option>
              <option
                className="bg-secondary"
                type="color"
                value="bg-secondary"
              ></option>
              <option
                className="bg-primary"
                type="color"
                value="bg-primary"
              ></option>
              <option
                className="bg-danger"
                type="color"
                value="bg-danger"
              ></option>
              <option
                className="bg-warning"
                type="color"
                value="bg-warning"
              ></option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <Button
            className="dark w-25 my-5 mx-auto btn btn-secondary"
            onClick={postData}
          >
            Save Your Todo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
