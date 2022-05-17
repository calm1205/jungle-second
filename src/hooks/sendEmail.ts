import emailjs from "@emailjs/browser";

type TemplatePrams = Record<string, unknown> | undefined;

export const sendEmail = async (args: TemplatePrams) => {
  await emailjs.send(
    process.env.EMAILJS_SERVICE_ID!,
    process.env.EMAILJS_TEMPLATE_ID!,
    args,
    process.env.EMAILJS_PUBLIC_KEY!
  );
};
