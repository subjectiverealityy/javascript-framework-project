import DropdownIcon from "./DropdownIcon"
import { useState } from "react";

export default function NavItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <li className="p-[10px] self-center text-[16px] inline-block relative" onClick={() => setIsOpen(!isOpen)}>
      <span className="inline-block">{props.name}</span>
      <DropdownIcon onClick={() => setIsOpen(!isOpen)} /> {/* note to devs: this component has a class of 'inline-block' */}
      {isOpen && <ul className="absolute">
        {props.items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>}
    </li>
  </>
}