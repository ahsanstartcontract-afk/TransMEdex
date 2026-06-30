/**
 * Internal notification email sent to the TransMedex team.
 */
export function contactNotificationHtml({ firstName, lastName, email, phone, practiceName, numberOfPhysicians, message }) {
	return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f4f4f7;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
      <!-- Header -->
      <tr>
        <td style="background:#1e293b;padding:28px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">New Contact Form Submission</h1>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#334155;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;width:180px;color:#64748b;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}" style="color:#8c2a8d;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Practice</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${practiceName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Physicians</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${numberOfPhysicians}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#64748b;" valign="top">Message</td>
              <td style="padding:10px 0;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:18px 32px;text-align:center;font-size:12px;color:#94a3b8;">
          This email was generated automatically by the TransMedex website contact form.
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
