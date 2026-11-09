export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  equipment: string;
  message: string;
  privacyAccepted: boolean;
  website?: string;
  ts?: number;
};

export type ContactFormStatus = "idle" | "sending" | "success" | "error";
