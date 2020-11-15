import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Switch} from "react-materialize";
function Sort(props) {
  const [ checked, setChecked] = useState(true);

  return (
    <div className="row">
        <div className="col s4"></div>
        <div className="col s5"></div>
        <div className="col s3">
        <Switch
          id="sortSwitch"
          offLabel="A-Z"
          type="checkbox"
          defaultChecked={false}
          onChange={props.onChange}
          onLabel="Z-A"
        />
            
        </div>
    </div>
  )
}

// ReactDOM.render(
//   <Sort />,
//   document.getElementById('checkbox')
// );

export default Sort;