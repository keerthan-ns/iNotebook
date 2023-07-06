import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Notes from "./Notes";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-6">
        <h1 className="text-3xl font-bold text-blue-300 after:content-['_a_note']">
          <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
            Add
          </span>
        </h1>
        <form className="mt-4 flex max-w-md flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" placeholder="name@flowbite.com" required type="email"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="bg-pink-600">Submit</Button>
        </form>
      </div>
      {/* notes are rendered using Notes concept */}
      <Notes/>
    </>
  );
}
