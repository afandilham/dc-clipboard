import React, { useState, useContext, useRef } from "react";
import HelpClipboard from "./events/HelpClipboard";
import SettingClipboard from "./events/SettingClipboard";
import Modal from "./shared/Modal";
import ExportClipboard from "./events/ExportClipboard";
import ImportClipboard from "./events/ImportClipboard";
import ClipboardContext from "../context/clipboard-context";
import classes from "./ClipboardForm.module.css";

const ClipboardForm = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [file, setFile] = useState(false);
  const [jsonFile, setJsonFile] = useState([]);
  const clipboardCtx = useContext(ClipboardContext);
  const clipboardData = clipboardCtx.clipboard;
  const inputRef = useRef("");

  const onSaveClipboard = (event) => {
    event.preventDefault();
    clipboardCtx.addClipboard(inputRef.current.value);
  };

  const jsonFileHandler = async (event) => {
    const fileJson = event.target.files[0];
    const text = await new Response(fileJson).text();
    const jsonParse = JSON.parse(text);
    setJsonFile(jsonParse);
  };

  const onImportJson = () => {
    clipboardCtx.addJsonFileItem(jsonFile);
  };

  const onHideModal = () => {
    setShowHelp(false);
    setShowSetting(false);
  };

  return (
    <>
      <div className={classes["clipboard-form"]}>
        <HelpClipboard editClipboard={() => setShowHelp} />
        <form onSubmit={onSaveClipboard} className={classes.form}>
          <input
            ref={inputRef}
            className={classes.input}
            type="text"
            placeholder="Paste your discord image link [enter]"
          />
        </form>
        <SettingClipboard settingClipboard={() => setShowSetting(true)} />
      </div>
      <Modal
        title="What is this website built for?"
        isOpen={showHelp}
        hideModal={onHideModal}
      >
        <p className="text-sm">A simple website to save your discord emoji</p>
        <h3 className="text-xl font-medium py-3">How to use</h3>
        <p className="text-sm">
          It's simple to use it, right click the emoji that you want to save and
          click copy link. Then paste to the input bar, it will automatically
          convert to the correct size.
        </p>
      </Modal>
      <Modal
        title="Clipboard Settings"
        isOpen={showSetting}
        hideModal={onHideModal}
      >
        <div className="flex gap-3">
          {!file && <ExportClipboard data={clipboardData} />}
          <ImportClipboard
            file={file}
            fileState={() => setFile(true)}
            unFileState={() => setFile(false)}
            handleJson={jsonFileHandler}
            importJson={onImportJson}
          />
        </div>
      </Modal>
    </>
  );
};

export default ClipboardForm;
