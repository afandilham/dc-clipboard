import React from "react";
import Button from "../shared/Button";
import classes from "./ImportClipboard.module.css";

const ExportClipboard = (props) => {
  return (
    <>
      {!props.file && (
        <Button onClick={props.fileState} color="gray">
          Import
        </Button>
      )}
      {props.file && (
        <div className="flex flex-col">
          <Button onClick={props.unFileState} color="gray">
            Back
          </Button>
          <input
            className={classes.file}
            onChange={props.handleJson}
            type="file"
            name="file"
            id="file"
            accept=".json"
          />
          <Button onClick={props.importJson} color="gray">
            Import
          </Button>
        </div>
      )}
    </>
  );
};

export default ExportClipboard;
