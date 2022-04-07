import React from "react";

function Root() {
  return (
    <div className="wellcome d-flex flex-column mt-5 w-75 text-center text-light mx-auto">
      <div className="m-auto">wellcome to my todo-project</div>
      <div className="m-auto">dont forget firebase needs vpn</div>
      <div className="d-flex flex-row p-3">
        <div className="ms-5 border p-1 rounded text-info">
          Call : +989059050270
        </div>
        <div className="ms-auto me-4 border p-1 rounded text-info">
          Email : s.a.s.kashani33@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Root;
