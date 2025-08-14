import Logo from "./Logo";
import NavItem from "./NavItem";
import Button from "./Button";

export default function HeaderSection() {
  return <header className="flex mt-[24px] h-fit justify-between px-[3vw]">
    <nav className="flex gap-[40px] items-center">
      <Logo />
      <ul className="list-none flex gap-[20px]">
        <NavItem name="Product" />
        <NavItem name="Resources" />
        <NavItem name="Prices" />
      </ul>
    </nav>
    <div className="items-center flex gap-[20px]">
      <Button name="Talk to Sales" className="fill"/>
      <Button name="Start Free Trial" />
    </div>
  </header>
}