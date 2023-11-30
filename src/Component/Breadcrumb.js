import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
  return (
    <>
      <nav aria-label="breadcrumb mt-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.page}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
