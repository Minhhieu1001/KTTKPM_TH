// Convert JSON -> XML (simple)
function jsonToXml(obj) {
    let xml = "";
    for (let key in obj) {
        xml += `<${key}>${obj[key]}</${key}>`;
    }
    return `<root>${xml}</root>`;
}

// Convert XML -> JSON (simple, demo thôi)
function xmlToJson(xml) {
    const result = {};
    const regex = /<(\w+)>(.*?)<\/\1>/g;
    let match;

    while ((match = regex.exec(xml))) {
        result[match[1]] = match[2];
    }

    return result;
}

module.exports = { jsonToXml, xmlToJson };