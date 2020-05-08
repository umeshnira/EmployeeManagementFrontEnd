import React, { Fragment, Children, useEffect } from "react";

export default function AdminSettings(props) {
  useEffect(() => {
    console.log(props.text);
  });
  return (
    <Fragment>
      hello admin settings
      {props.text}
      {props.whichTab}
      {props.Children}
    </Fragment>
  );
}
