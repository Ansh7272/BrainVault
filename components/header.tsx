import { HeaderActions } from "@/app/header-actions"
import { ModeToggle } from "./ui/ModeToggle"
import Image from "next/image"

export function Header(){
    return(
        <div className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-4 text-2xl">
                <Image src="/logo.png" className="rouned-full" width={40} height={40} alt="an image of a brain"/>
                  BrainVault
            </div>
            <div className="flex gap-4 items-center">
                <ModeToggle/>
                <HeaderActions/>
                  </div>
                  </div>
        </div>
    )
}