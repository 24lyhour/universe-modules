<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px 16px 0 0;">
                            <div style="width: 70px; height: 70px; background-color: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                                Verification Code
                            </h1>
                            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">
                                Your login security code
                            </p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="margin: 0 0 24px; color: #374151; font-size: 16px; line-height: 1.6;">
                                Hello <strong>{{ $userName }}</strong>,
                            </p>
                            <p style="margin: 0 0 32px; color: #6b7280; font-size: 15px; line-height: 1.6;">
                                We received a request to sign in to your account. Use the verification code below to complete your login:
                            </p>

                            <!-- Code Box -->
                            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px dashed #e2e8f0; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 32px;">
                                <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                                    Your Code
                                </p>
                                <p style="margin: 0; font-size: 42px; font-weight: 700; letter-spacing: 12px; color: #1f2937; font-family: 'Courier New', monospace;">
                                    {{ $code }}
                                </p>
                            </div>

                            <!-- Timer -->
                            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 32px;">
                                <p style="margin: 0; color: #92400e; font-size: 14px;">
                                    <strong>Expires in {{ $expirationMinutes }} minutes</strong><br>
                                    <span style="color: #b45309;">This code will become invalid after the time limit.</span>
                                </p>
                            </div>

                            <!-- Security Notice -->
                            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                                <p style="margin: 0 0 8px; color: #374151; font-size: 14px; font-weight: 600;">
                                    Didn't request this code?
                                </p>
                                <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                                    If you didn't try to sign in, someone may be attempting to access your account.
                                    Please secure your account by changing your password immediately.
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 24px 40px; background-color: #f9fafb; border-radius: 0 0 16px 16px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px; text-align: center;">
                                This is an automated message from {{ $appName }}
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                                &copy; {{ date('Y') }} {{ $appName }}. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
