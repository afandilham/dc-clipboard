import { createContext } from "react";

const ClipboardContext = createContext({
  clipboard: [],
  addClipboard: (item) => {},
  addJsonFileItem: (items) => {},
  removeClipboard: (id) => {},
});

export default ClipboardContext;
