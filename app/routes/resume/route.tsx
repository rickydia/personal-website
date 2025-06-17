import { redirect } from "react-router";

export async function loader() {
  // The import gives us the URL path to the PDF, so we redirect to it
  return redirect("/assets/resume.pdf");
}
