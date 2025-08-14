import logo from "../assets/logo.png";

export default function Logo() {
  return <div className="flex gap-[8px] items-center">
    <img src={logo} alt="Logo" width="36" height="36" className="w-[36px] h-[36px]"></img>
    <span className="font-[var(--secondary-font)] font-semibold text-[var(--orange)] text-[24px] leading-[60px]">Ndara.ai</span>
  </div>
}