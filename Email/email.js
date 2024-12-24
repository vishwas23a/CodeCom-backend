import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./mailTemplate.js";
import { mailtrapClient } from "./mail.js";
import { sender } from "./mail.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
      const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Verif Your Email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace(
          "{verificationCode}",
          verificationToken
        ),
        category: " Email Verification",
      });
      console.log("send successfully", response);
    } catch (error) {
      console.log("Error sending verification", error);
      throw new Error(`Error sending verification Email :${error}`);
    }
  };
  export const sendWelcomeEmail = async (name, email) => {
    const recipient = [{ email }];
    try {
      const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        template_uuid: "3c7af0d7-ec65-421f-b67e-fbfed28fa25f",
        template_variables: {
          name: name,
          company_info_name: "CodCom",
        },
      });
      console.log("welcome email successfully", response);
    } catch (error) {
      console.log("error sending welcome mail", error);
      throw new Error(`Error sending welcome email :${error}`);
    }
  };
  export const sendResetPasswordEmail =async(email,URL)=>{
    const recipient = [{ email }];
    try {
      const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Reset Password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",URL),
        category: "Password Reset",
      });
      console.log("reset password email successfully", response);
    } catch (error) {
      console.log("error sending reset password email", error);
      throw new Error(`Error sending reset password email :${error}`);
    }

  }
  export const sendSuccessEmail=async(email)=>{
    const recipient = [{ email }];
    try {
      const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Success",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        category: "Registration Success",
      });
      console.log("success email successfully", response);
    } catch (error) {
      console.log("error sending success email", error);
      throw new Error(`Error sending success email :${error}`);
    }
  }