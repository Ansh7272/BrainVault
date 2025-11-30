"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
export default function CreateDocumentButton() {

    const [Isopen,setIsopen] = useState(false)
    
  return (
    <Dialog onOpenChange={setIsopen} open={Isopen}>
  <DialogTrigger asChild>
            <Button>Upload Document</Button>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload a Document</DialogTitle>
      <DialogDescription>
        Upload a team document for you to search in the future.
      </DialogDescription>
      <UploadDocumentForm onUpload={()=>setIsopen(false)} />
    </DialogHeader>
  </DialogContent>
</Dialog>

    
  );
}
