
'use server'

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: any) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/dashboard/customer" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/signIn" });
}

export async function doCredentialLogin(formData: any) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log("response: ", response);
    return response;
  } catch (err) {
    throw err;
  }
}