import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const InvoicePdf = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>PDF Title</Text>
      <View style={styles.section}>
        <Text style={styles.text}>Section 1: {data.section1}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Section 2: {data.section2}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePdf;
