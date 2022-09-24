import React from "react";
import classes from "./ExportClipboard.module.css";

const ExportClipboard = (props) => {
  return (
    <a
      className={classes.export}
      href={`data:text/json;charset=utf-8, ${encodeURIComponent(
        JSON.stringify(props.data)
      )}`}
      download="export_data.json">
      Export
    </a>
  );
};

export default ExportClipboard;
