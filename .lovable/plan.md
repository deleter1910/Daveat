

## Add Turnstile Site Key to Environment

**Task**: Add the Cloudflare Turnstile Site Key to the frontend environment configuration.

### Changes Required

**File: `.env`**
- Add the following line:
  ```
  VITE_TURNSTILE_SITE_KEY="0x4AAAAAACU-89Dfyr_Rhtrl"
  ```

### Result
Once added, the Turnstile CAPTCHA widget will display on the contact form, requiring users to complete the challenge before submitting.

### Technical Notes
- The site key is a public value (safe to include in frontend code)
- The corresponding secret key is already configured in the backend secrets
- The edge function `send-contact-email` will verify tokens server-side

