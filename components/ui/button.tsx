import * as React from "react";
export function Button({className="",asChild,children,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&{asChild?:boolean}) {
  if(asChild && React.isValidElement(children)) return React.cloneElement(children as React.ReactElement,{className:`inline-flex items-center justify-center rounded-xl font-semibold transition ${className}`});
  return <button className={`inline-flex items-center justify-center rounded-xl font-semibold transition ${className}`} {...props}>{children}</button>;
}
