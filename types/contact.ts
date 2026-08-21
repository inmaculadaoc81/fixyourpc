export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  equipment: string;
  message: string;
  privacyAccepted: boolean;
};

export type ContactFormStatus = "idle" | "sending" | "success" | "error";
