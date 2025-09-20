import { createContext, useContext, useState } from "react";

const DropDownContext = createContext();

function Dropdown({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <DropDownContext.Provider value={{ open, openName, close }}>
      {children}
    </DropDownContext.Provider>
  );
}

function Open({ open: openDropMenu, children, style, disabled }) {
  const { openName, open, close } = useContext(DropDownContext);

  function handleClick() {
    openName === "" || openName !== openDropMenu ? open(openDropMenu) : close();
  }

  return (
    <button className={style} onClick={handleClick} disabled={disabled}>
      {children}
      <img src="/images/icon-dropdown.svg" className="rotate-0" />
    </button>
  );
}

function List({ children, open: openDropMenu, style }) {
  const { openName } = useContext(DropDownContext);

  if (openName !== openDropMenu) return null;
  return <main className={style}>{children}</main>;
}

Dropdown.Open = Open;
Dropdown.List = List;

export default Dropdown;
