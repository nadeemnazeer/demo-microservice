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

    async createDocument(document) {
        let data = {};
        data = await Document.create(document);
        return data;
    }

}

module.exports = new DocumentRepository();