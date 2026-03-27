const XMLService = require("./XMLService");
const { jsonToXml, xmlToJson } = require("./utils");

class Adapter {
    constructor() {
        this.xmlService = new XMLService();
    }

    request(jsonData) {
        console.log("\n[Adapter] Convert JSON -> XML");

        // JSON -> XML
        const xmlRequest = jsonToXml(jsonData);

        // gọi hệ thống XML
        const xmlResponse = this.xmlService.process(xmlRequest);

        console.log("\n[Adapter] Convert XML -> JSON");

        // XML -> JSON
        const jsonResponse = xmlToJson(xmlResponse);

        return jsonResponse;
    }
}

module.exports = Adapter;