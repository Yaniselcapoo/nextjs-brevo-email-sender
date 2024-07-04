import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
}

export async function sendEmail({ subject, to, htmlContent }: Params) {
  try {
    smtpEmail.subject = subject;
    smtpEmail.to = to;
    smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
    smtpEmail.sender = { name: "Yanis", email: "yanisito@blogyanisito.dev" };
    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.log(error);
  }
}
