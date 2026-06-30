/**
 * Contact-form server-side validation & sanitisation.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s()+\-.,]{7,20}$/;
const LINK_RE = /https?:\/\/|www\./i;

/** Strip HTML tags */
function sanitize(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/<[^>]*>/g, '').trim();
}

/**
 * Returns an array of error messages.  Empty array = valid.
 */
export function validateContactForm(body) {
	const errors = [];

	const firstName = sanitize(body.firstName);
	const lastName = sanitize(body.lastName);
	const email = sanitize(body.email);
	const phone = sanitize(body.phone);
	const practiceName = sanitize(body.practiceName);
	const numberOfPhysicians = sanitize(body.numberOfPhysicians);
	const message = sanitize(body.message);

	// Required fields
	if (!firstName || firstName.length < 2 || firstName.length > 50) {
		errors.push('First name must be 2–50 characters.');
	}
	if (!lastName || lastName.length < 2 || lastName.length > 50) {
		errors.push('Last name must be 2–50 characters.');
	}
	if (!email || !EMAIL_RE.test(email)) {
		errors.push('A valid email address is required.');
	}
	if (!phone || !PHONE_RE.test(phone)) {
		errors.push('A valid phone number is required (7–20 digits).');
	}
	if (!practiceName || practiceName.length < 2 || practiceName.length > 100) {
		errors.push('Practice name must be 2–100 characters.');
	}

	const validPhysicians = ['1', '2-5', '6-10', '10+'];
	if (!validPhysicians.includes(numberOfPhysicians)) {
		errors.push('Invalid number of physicians selection.');
	}

	if (!message || message.length < 10 || message.length > 2000) {
		errors.push('Message must be 10–2000 characters.');
	}

	// Anti-spam: reject messages full of links
	if (LINK_RE.test(message)) {
		errors.push('Links are not allowed in the message.');
	}

	// Honeypot — if the hidden field was filled, it's a bot
	if (body._hp_website && body._hp_website.length > 0) {
		errors.push('Spam detected.');
	}

	return {
		errors,
		sanitized: { firstName, lastName, email, phone, practiceName, numberOfPhysicians, message },
	};
}
