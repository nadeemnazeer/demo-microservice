const documentRepository  = require('../repository/document.repository');

class DocumentService {

    constructor() {}

    async getDocuments() {
        return await documentRepository.getDocuments();
    }


}

module.exports = new DocumentService();