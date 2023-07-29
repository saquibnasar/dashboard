import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";

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
    },
    textheader: {
      marginVertical: "auto",
      marginHorizontal: "auto",
      color: "#000",
      fontSize: 37,
      fontWeight: 700,
      marginTop: -10,
      // fontFamily: "Outfit",
    },
    textbottom: {
      marginVertical: "auto",
      marginHorizontal: "auto",
      color: "#000",
      fontSize: 35,
      fontWeight: 500,
    },

    text: {
      fontSize: 14,
      marginVertical: "auto",
      marginHorizontal: "auto",
      color: "#000",
      fontSize: 24,
      fontWeight: 500,
      marginTop: -10,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: "auto",
      maxWidth: "100%",
      width: "200px",
      height: "auto",
    },
    imageQr: {
      marginVertical: 15,
      marginHorizontal: "auto",
      maxWidth: "100%",
      width: "250px",
      height: "auto",
    },
    imageLogo: {
      marginVertical: 15,
      marginHorizontal: "auto",
      maxWidth: "100%",
      width: "150px",
      height: "auto",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });
  return (
    <>
      <Document>
        {/* <div style={styles.page}>
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
        </div> */}
        <Page style={styles.body}>
          <Text style={styles.header}></Text>
          <Image style={styles.image} src={"/deviceslogo.png"} />
          <Text style={styles.textheader}>Sunny Katyal</Text>
          <Text style={styles.text}>Chief Technical Officer</Text>
          <Image style={styles.imageQr} src={"/qrcode.png"} />
          <Text style={styles.textbottom}>Scan to save Contact </Text>
          {/* <Text>Powered by </Text> */}
          <Image style={styles.imageLogo} src={"/flaxlogo.png"} />
          {/* <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          /> */}
        </Page>
      </Document>
    </>
  );
}
