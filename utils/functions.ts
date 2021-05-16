export const firebaseAuthCodeToText = (
  authCode: string,
  type: "SignIn" | "SignUp"
) => {
  switch (authCode) {
    case "auth/email-already-in-use":
      return "Account already exists";
    case "auth/user-not-found":
      return "User not found";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/invalid-email":
      return "Invalid email";
    default:
      return type === "SignUp" ? "Unable to Sign Up" : "Unable to Sign In";
  }
};
