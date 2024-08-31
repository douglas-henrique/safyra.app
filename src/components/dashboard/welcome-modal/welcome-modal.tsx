'use client'
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { WelcomeModalForm } from "./form";

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <Dialog open={isOpen} onOpenChange={(e) => {
            if (e === false) {
                setIsOpen(e)
            }
        }}>
            <ContextMenu>
                <ContextMenuTrigger>Right click</ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Open</ContextMenuItem>
                    <ContextMenuItem>Download</ContextMenuItem>
                    <DialogTrigger asChild>
                        <ContextMenuItem>
                            <span>Delete</span>
                        </ContextMenuItem>
                    </DialogTrigger>
                </ContextMenuContent>
            </ContextMenu>
            <DialogTitle>
                teste
            </DialogTitle>
            <DialogDescription>
                sauohsauohsauoh
            </DialogDescription>
            <DialogContent onEscapeKeyDown={(e) => e.preventDefault()}
                // onPointerDown={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()} className="flex flex-col justify-center items-center">
                <WelcomeModalForm closeModal={() => setIsOpen(false)}/>
            </DialogContent>
        </Dialog>
    )
}