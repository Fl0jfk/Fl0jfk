import { ContactFormData } from "../components/contact/FormContact";

export async function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email';
  try {
        const res = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const response = await res.json();
        alert(response.message);
    } catch (err) {
        console.error('Error Sending Email:', err);
        alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.');
    }
}