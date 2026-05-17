import * as React from "react";
export function Input({className="",...props}:React.InputHTMLAttributes<HTMLInputElement>){return <input className={`w-full rounded-xl border px-3 py-2 ${className}`} {...props}/>;}
