const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({ 
                title: 'string', 
                body: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                author: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Document = mongoose.model('documents', documentSchema);

module.exports = {
    Document
}