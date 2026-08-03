const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Generating Company Profile PDF...');
  
  try {
    // Read the HTML template
    const templatePath = path.join(__dirname, 'pdf-template.html');
    const htmlContent = fs.readFileSync(templatePath, 'utf8');

    // Launch a headless browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    const { pathToFileURL } = require('url');
    const fileUrl = pathToFileURL(templatePath).href;

    // Load the HTML file via file:// URL so relative paths (like images) work
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Ensure the public directory exists
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Define output path
    const outputPath = path.join(publicDir, 'Company_Profile_PT_Mitra_Bintang_Transportindo.pdf');

    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    await browser.close();
    console.log(`✅ PDF successfully generated at: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF();
