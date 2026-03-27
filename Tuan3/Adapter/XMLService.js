class XMLService {
    process(xmlData) {
        console.log("\n[XMLService] Processing XML:");
        console.log(xmlData);

        // giả lập xử lý
        return `<response><status>success</status></response>`;
    }
}

module.exports = XMLService;