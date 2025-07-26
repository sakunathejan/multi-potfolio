# Fix Contact Form in Netlify - Environment Variables Setup

Your contact form is not working on Netlify because the EmailJS environment variables are not configured in your Netlify deployment.

## The Problem
- ✅ Works locally (because you have a `.env` file)
- ❌ Doesn't work on Netlify (because `.env` files are not deployed)

## Solution: Add Environment Variables to Netlify

### Step 1: Get Your EmailJS Credentials
If you haven't set up EmailJS yet:
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up and create an account
3. Create an Email Service (Gmail, Outlook, etc.)
4. Create an Email Template
5. Get your API keys

### Step 2: Add Environment Variables to Netlify

1. **Go to your Netlify Dashboard**
   - Visit [https://app.netlify.com/](https://app.netlify.com/)
   - Select your portfolio site

2. **Navigate to Site Settings**
   - Click on your site name
   - Go to "Site settings" (in the top navigation)

3. **Find Environment Variables**
   - In the left sidebar, click "Environment variables"
   - Click "Add a variable"

4. **Add These Three Variables**
   ```
   Key: VITE_EMAILJS_SERVICE_ID
   Value: your_service_id_here
   
   Key: VITE_EMAILJS_TEMPLATE_ID
   Value: your_template_id_here
   
   Key: VITE_EMAILJS_USER_ID
   Value: your_user_id_here
   ```

5. **Save and Deploy**
   - Click "Save" for each variable
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"

### Step 3: Verify the Setup

1. **Check Browser Console**
   - Open your deployed site
   - Open Developer Tools (F12)
   - Go to Console tab
   - Try submitting the contact form
   - Look for any error messages

2. **Test the Form**
   - Fill out the contact form
   - Submit it
   - Check if you receive the email

## Alternative: Quick Test

If you want to test if the environment variables are working, you can temporarily add this to your Contact component:

```javascript
// Add this temporarily to see if variables are loaded
console.log('Environment variables:', {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  USER_ID: import.meta.env.VITE_EMAILJS_USER_ID
});
```

## Common Issues and Solutions

### Issue: "Sending..." stays forever
**Solution**: Check browser console for errors. Usually means environment variables are missing.

### Issue: "EmailJS is not configured" alert
**Solution**: Environment variables are not set in Netlify. Follow Step 2 above.

### Issue: "Failed to send message"
**Solution**: Check your EmailJS configuration and template variables.

## Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Verify your EmailJS credentials are correct
3. Make sure your email template variables match: `{{name}}`, `{{email}}`, `{{message}}`
4. Contact me at sakunathejan@gmail.com for assistance

## Local Development

For local development, create a `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here
```

Remember: The `.env` file should be in your `.gitignore` to keep your credentials secure. 