import React, { useContext } from "react";
import ClipboardContext from "../context/clipboard-context";
import ClipboardItem from "./ClipboardItem";
import classes from "./ClipboardLists.module.css";

const ClipboardLists = () => {
  const clipboardCtx = useContext(ClipboardContext);

  const onCopyEvent = (imageLink) => {
    navigator.clipboard.writeText(imageLink);
  };

  const onRemoveEvent = (index) => {
    clipboardCtx.removeClipboard(index);
  }

  return (
    <div className={classes["clipboard-lists"]}>
      {clipboardCtx.clipboard.map((item, index) => (
        <ClipboardItem
          key={index} 
          item={item}
          copyEvent={onCopyEvent.bind(null, item)}
          removeEvent={onRemoveEvent.bind(null, index)}
        />
      ))}
    </div>
  );
};

export default ClipboardLists;
