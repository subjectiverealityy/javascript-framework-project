import DropdownIcon from "./DropdownIcon"

export default function NavItem(props) {
  return <>
    <li className="flex p-[10px] self-center text-[16px]">{props.name}<DropdownIcon /></li>
  </>
}