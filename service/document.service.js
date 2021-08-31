const documentRepository  = require('../repository/document.repository');

class DocumentService {

    constructor() {}

    async getDocuments() {
        return await documentRepository.getDocuments();
    }

    async createDocument(document) {
        return await documentRepository.createDocument(document);
    }


}

module.exports = new DocumentService();