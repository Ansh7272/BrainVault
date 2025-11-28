"use client"
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated,useMutation, useQuery } from "convex/react";

export default function Home() {

    const createDocument = useMutation(api.documents.createDocument)
    const documents = useQuery(api.documents.getDocuments)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button onClick={()=>{createDocument({title:"hello world"})}}>Click Me</button>
        {documents?.map((doc)=>(
          <div key={doc._id}>{doc.title}</div>
        ) )}
      </Authenticated>
      {/* <AuthLoading>
        <p>Still loading</p>
      </AuthLoading> */}
      </main>
    </div>
  );
}
