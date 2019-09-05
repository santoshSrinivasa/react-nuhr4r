import React from "react";
import {render} from "react-dom";


function Welcome(props)
{
  return <h3>hello {props.name} {props.id}</h3>;
}

var comment={
  name:"santosh",
  id:3
}

render(<Welcome name={comment.name} id={comment.id} />,document.getElementById('root'));

