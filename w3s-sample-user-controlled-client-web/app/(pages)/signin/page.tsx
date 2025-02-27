 
import { authOptions, validOnboardStatus } from "@/app/shared/utils";
import { AuthenticationForm } from "@/app/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  const isValidOnboardStatus = session
    ? await validOnboardStatus(session)
    : false;

  if (session && isValidOnboardStatus) {
    redirect("/wallets");
  }

  return <AuthenticationForm />;
}
