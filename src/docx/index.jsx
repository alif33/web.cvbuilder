const { Document, Packer, Paragraph, TextRun } = require('docx');

// Define a reusable component
const Section = ({ title, content }) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: title,
          bold: true,
          size: 24,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun(content),
      ],
    }),
  ];
};

// Create a new Document
const doc = new Document();

// Use the Section component
doc.addSection({
  properties: {},
  children: [
    ...Section({
      title: 'Experience',
      content: 'Company XYZ - Position\nDates: January 2020 - Present\nResponsibilities:\n- Managed projects\n- Conducted meetings',
    }),
    ...Section({
      title: 'Education',
      content: 'University ABC - Degree\nDates: 2015 - 2019',
    }),
  ],
});

// Save the Document
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('resume.docx', buffer);

});