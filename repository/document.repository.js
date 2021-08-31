const { connect, disconnect } = require('../config/db.config');
const { Document } = require('../model/document.model');

class DocumentRepository {

    constructor() {
        connect();
    }

    async getDocuments() {
        const documents = await Document.find({});
        return documents;
    }

}

module.exports = new DocumentRepository();