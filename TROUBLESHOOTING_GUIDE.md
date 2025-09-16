# Troubleshooting Google Sheets Integration

## Issue: Form data not appearing in Google Sheets

### Step 1: Enhanced Google Apps Script

Replace your current Google Apps Script with this improved version:

```javascript
function doPost(e) {
  console.log('📥 Received request:', e);
  console.log('📝 Post data:', e.postData);
  
  try {
    // Replace with your actual Google Sheets ID
    const SHEET_ID = 'YOUR_GOOGLE_SHEETS_ID_HERE';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    console.log('📊 Sheet accessed successfully');
    
    // Parse the incoming data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
      console.log('✅ Data parsed:', data);
    } else {
      throw new Error('No data received');
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error('Missing required fields');
    }
    
    // Add data to the sheet
    const newRow = [
      new Date(), // Timestamp
      data.name || 'N/A',
      data.email || 'N/A',
      data.phone || 'Not provided',
      data.message || 'N/A'
    ];
    
    console.log('📝 Adding row:', newRow);
    sheet.appendRow(newRow);
    console.log('✅ Row added successfully');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true, 
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('❌ Error:', error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false, 
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Test function to verify the script is working
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'Google Apps Script is working!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 2: Verification Checklist

#### ✅ Check Google Sheets Setup:
1. **Column Headers** (Row 1):
   - A1: `Timestamp`
   - B1: `Name` 
   - C1: `Email`
   - D1: `Phone`
   - E1: `Message`

2. **Google Sheets ID**:
   - Copy from URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
   - Replace `YOUR_GOOGLE_SHEETS_ID_HERE` in the script

3. **Sheet Permissions**:
   - Make sure you have edit access to the sheet
   - The sheet should not be protected

#### ✅ Check Google Apps Script:
1. **Deployment**:
   - Go to script.google.com
   - Open your project
   - Click "Deploy" → "Manage deployments"
   - Verify it's deployed as "Web app"
   - Verify "Execute as: Me"
   - Verify "Who has access: Anyone"

2. **Test the Script**:
   - Copy your Web App URL
   - Open it in a new browser tab
   - You should see: `{"status":"Google Apps Script is working!","timestamp":"..."}`

#### ✅ Check Form Integration:
1. **URL Configuration**:
   - Verify the `GOOGLE_SCRIPT_URL` in Contact.tsx matches your Web App URL
   - URL should end with `/exec`

2. **Browser Console**:
   - Open DevTools (F12) → Console
   - Submit the form
   - Check for any error messages

### Step 3: Test Process

1. **Submit Test Form**:
   - Fill out: Name, Email, Message
   - Click "Send Message"
   - Check browser console for logs

2. **Check Google Sheets**:
   - Refresh your Google Sheets
   - Look for new row with timestamp

3. **Check Google Apps Script Logs**:
   - Go to script.google.com
   - Open your project
   - Click "Executions" to see logs

### Step 4: Common Issues & Solutions

#### Issue: "Script function not found"
**Solution**: Make sure you saved and deployed the script

#### Issue: "Permission denied"
**Solution**: Re-authorize the script permissions

#### Issue: "No data in sheets"
**Solution**: Check the Google Sheets ID in your script

#### Issue: "CORS errors"
**Solution**: Using `mode: 'no-cors'` is correct for Google Apps Script

### Step 5: Alternative Testing Method

If still not working, try this simplified test script:

```javascript
function doPost(e) {
  // Simple test - just log to execution transcript
  console.log('Test received:', new Date());
  
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SHEETS_ID').getActiveSheet();
    sheet.appendRow([new Date(), 'Test Entry', 'test@email.com', '123456789', 'Test message']);
    return ContentService.createTextOutput('SUCCESS');
  } catch (error) {
    console.error('Error:', error);
    return ContentService.createTextOutput('ERROR: ' + error.toString());
  }
}
```

### Next Steps:
1. Update your Google Apps Script with the enhanced version
2. Replace `YOUR_GOOGLE_SHEETS_ID_HERE` with your actual Sheet ID
3. Save and redeploy the script
4. Test the form submission
5. Check browser console and Google Apps Script execution logs