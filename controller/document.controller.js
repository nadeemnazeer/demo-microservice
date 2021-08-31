const documentService  = require('../service/document.service');

class DocumentController {

    async getDocuments() {
        return await documentService.getDocuments();
    }


}
module.exports = new DocumentController();