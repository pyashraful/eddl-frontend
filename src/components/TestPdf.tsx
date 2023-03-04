import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import {
  Document,
  Page,
  View,
  Text,
  usePDF,
  PDFDownloadLink,
  BlobProvider,
  StyleSheet,
  PDFViewer,
  pdf,
} from '@react-pdf/renderer';

// import { saveAs } from 'file-saver';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
});

const TestPdf = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>Section #1</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

function Test() {
  return (
    <div>
      <BlobProvider document={TestPdf}>
        {({ url, ...rest }) => {
          console.log('🚀 ~ file: TestPdf.tsx:50 ~ Test ~ rest', { ...rest });
          console.log('🚀 ~ file: TestPdf.tsx:50 ~ Test ~ url', url);

          return (
            // <a href={url} target="_blank" rel="noreferrer">
            //   Open in new tab
            // </a>
            <h1>Test</h1>
          );
        }}
      </BlobProvider>
    </div>
  );
}

export default Test;
