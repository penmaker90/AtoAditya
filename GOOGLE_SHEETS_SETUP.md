# Google Sheets Integration Setup Guide

## Complete Setup Instructions

### Step 1: Create Google Sheets
1. Go to Google Drive (drive.google.com)
2. Click "New" → "Google Sheets" → "Blank spreadsheet"
3. Rename the sheet to "A2Z Contact Form Submissions"
4. Set up column headers in row 1:
   - A1: **Timestamp**
   - B1: **Name**
   - C1: **Email** 
   - D1: **Phone**
   - E1: **Message**

### Step 2: Get Google Sheets ID
1. Copy the Sheets ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/[SHEETS_ID]/edit`
   - Copy the part between `/d/` and `/edit`
   - Example: If URL is `https://docs.google.com/spreadsheets/d/1ABC123xyz/edit`
   - Then Sheets ID is: `1ABC123xyz`

### Step 3: Create Google Apps Script
1. Go to script.google.com
2. Click "New Project"
3. Replace the default code with the script provided below
4. Replace `YOUR_GOOGLE_SHEETS_ID` with your actual Sheets ID

### Step 4: Deploy the Script
1. Click "Deploy" → "New Deployment"
2. Click the gear icon ⚙️ next to "Type"
3. Select "Web app"
4. Configure:
   - Description: "A2Z Contact Form Handler"
   - Execute as: "Me (your email)"
   - Who has access: "Anyone"
5. Click "Deploy"
6. **Copy the Web App URL** (starts with https://script.google.com/...)

### Step 5: Update Contact Form
1. Open `src/pages/Contact.tsx`
2. Find this line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`
3. Replace with your actual Web App URL

## Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Replace 'YOUR_GOOGLE_SHEETS_ID' with your actual Google Sheets ID
    const sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEETS_ID').getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add data to the sheet
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email, 
      data.phone || 'Not provided',
      data.message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Security Warning Solution

### When You See "Google hasn't verified this app":

1. **This is Normal**: Google shows this for all personal Apps Script projects
2. **Click "Advanced"**: At the bottom of the warning screen
3. **Click "Go to [Project Name] (unsafe)"**: This continues the authorization
4. **Click "Allow"**: Grant permission to access your spreadsheets
5. **Complete Deployment**: Get your Web App URL

**Why This Happens:**
- Google requires verification for commercial apps
- Personal projects don't need verification
- You created the script, so it's safe to authorize

**What the Script Accesses:**
- Only your specific Google Sheet
- Only writes form data (no reading sensitive data)
- No access to other files or accounts

### Alternative: Email Integration (No Google Scripts)

If you prefer to avoid Google Apps Script, you can use EmailJS instead:

1. Go to emailjs.com and create account
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template
4. Use EmailJS in your React form

**EmailJS Integration Code:**
```javascript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      formData,
      'YOUR_PUBLIC_KEY'
    );
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us."
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message."
    });
  }
};
```



1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheets - new row should appear with the form data
4. Check browser console for any errors

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Normal with Google Apps Script, use `mode: 'no-cors'`
2. **Permission Denied**: Make sure the script is deployed with "Anyone" access
3. **Sheet Not Found**: Verify the Google Sheets ID is correct
4. **Script Not Responding**: Check if the Google Apps Script URL is correct

### Debugging Steps:
1. Check browser console for errors
2. Test the Google Apps Script URL directly
3. Verify Google Sheets permissions
4. Ensure all column headers are set correctly

## Security Notes

- Google Apps Script runs with your Google account permissions
- Only deploy scripts you trust
- Consider adding validation to the script for production use
- Monitor the Google Sheets for spam submissions

## Data Structure

The form will save this data to Google Sheets:
- **Timestamp**: When the form was submitted
- **Name**: User's full name
- **Email**: User's email address
- **Phone**: User's phone number (optional)
- **Message**: User's message/inquiry

Form submissions will appear as new rows in your Google Sheets automatically!