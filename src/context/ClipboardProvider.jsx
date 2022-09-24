import { useState, useEffect } from "react";
import ClipboardContext from "./clipboard-context";
import clipboardData from "../data";

const setLocalStorage = (item) => {
  localStorage.setItem("clipboard", JSON.stringify(item));
};

const ClipboardProvider = (props) => {
  const [clipboard, setClipboard] = useState([]);
  const getLocalClipboardStorage = JSON.parse(
    localStorage.getItem("clipboard")
  );

  useEffect(() => {
    if (getLocalClipboardStorage === null) {
      localStorage.setItem("clipboard", JSON.stringify(clipboardData));
      setClipboard(clipboardData);
      return;
    }

    setClipboard(getLocalClipboardStorage);
  }, []);

  const addClipboardHandler = (value) => {
    // Change emoji size to 44px
    const itemReplace = value.replace("size=96&quality=lossless", "size=44");
    // Store available localStorage data on temporary localStorageItem
    const localStorageItem = getLocalClipboardStorage;
    localStorageItem.push(itemReplace);
    setLocalStorage(localStorageItem);

    setClipboard((prevState) => {
      return [...prevState, itemReplace];
    });
  };

  const addJsonFileItemHandler = (items) => {
    const localStorageItem = getLocalClipboardStorage;
    localStorageItem.push(...items);
    setLocalStorage(localStorageItem);

    setClipboard((prevState) => {
      return [...prevState, ...items];
    });
  };

  const removeClipboardHandler = (index) => {
    console.log(index);
    const filteredValue = clipboard.filter((_, i) => i !== index);
    setLocalStorage(filteredValue);

    setClipboard(filteredValue);
  };

  const clipboardContext = {
    clipboard: clipboard,
    addClipboard: addClipboardHandler,
    addJsonFileItem: addJsonFileItemHandler,
    removeClipboard: removeClipboardHandler,
  };

  return (
    <ClipboardContext.Provider value={clipboardContext}>
      {props.children}
    </ClipboardContext.Provider>
  );
};

export default ClipboardProvider;
