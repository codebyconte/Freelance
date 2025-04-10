import * as React from "react";

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Nouveau message de contact</h1>
    <p>
      <strong>Nom :</strong> {firstName} {lastName}
    </p>
    <p>
      <strong>Email :</strong> {email}
    </p>
    <p>
      <strong>Téléphone :</strong> {phone}
    </p>
    <p>
      <strong>Message :</strong>
    </p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
