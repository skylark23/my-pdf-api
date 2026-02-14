import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Path to your PDF file
    const pdfPath = path.join(process.cwd(), 'public', 'sample.pdf');
    
    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Set headers to return PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="sample.pdf"');
    res.setHeader('Content-Length', pdfBuffer.length);
    
    // Send the PDF
    res.status(200).send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load PDF', message: error.message });
  }
}
