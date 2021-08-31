const documentService  = require('../service/document.service');

class DocumentController {

    async getDocuments() {
        return await documentService.getDocuments();
    }

    async createDocument(document) {
        return await documentService.createDocument(document);
    }

}
module.exports = new DocumentController();