import React from "react";
import PropsTable from "react-docgen-props-table";

function ComponentsDoc(props) {
  return (
    <div>
      {props.components.map(table => (
        <div>
          <p>{table.displayName}</p> 
          <PropsTable props={table.props} />
        </div>
      ))}
    </div>
  );
}

export default ComponentsDoc;
