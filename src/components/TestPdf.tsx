/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Document, Page, BlobProvider } from '@react-pdf/renderer';
// import TestPdfDocument from './TestPdfDocument'; // Assuming you have a separate component for the PDF document

function TestPdfUrl({ url }) {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        Open in new tab
      </a>
      <h1>Test</h1>
    </div>
  );
}

function Test() {
  return (
    <div>
      <BlobProvider document={<TestPdfDocument />}>
        {({ url }) => {
          return <TestPdfUrl url={url} />;
        }}
      </BlobProvider>
    </div>
  );
}

export default Test;
