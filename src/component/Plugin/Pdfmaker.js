import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

export default function Pdfmaker() {
  const styles = StyleSheet.create({
    page: {
      // flexDirection: "row",
      backgroundColor: "#E4E4E4",
      display: "flex",
      justifyContent: "center",
    },
    logo: {
      maxWidth: "100%",
      width: "100px",
      height: "auto",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "AntonFamily",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
      maxWidth: "100%",
      width: "100px",
      height: "auto",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
  });
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <div style={styles.page}>
            <Image
              className="logo"
              style={styles.image}
              src={"/deviceslogo.png"}
            />
            <div>
              <Text>Sunny Katyal</Text>
              <Text>Chief Technical Officer</Text>
            </div>
            <View style={styles.section}></View>

            <Image style={styles.image} src={"/qrcode.png"} />
            <View style={styles.section}>
              <Text>Scan to save Contact </Text>
            </View>
            <View style={styles.section}>
              <Text>Powered by</Text>
            </View>
            <Image style={styles.image} src={"/logofill.svg"} />
          </div>
        </Page>
      </Document>
    </>
  );
}
