import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  throw new Error("Error occured...");
  await deleteContact(params.contactId);
  return redirect("/");
}

export default function Destroy() {
  return <div></div>;
}
