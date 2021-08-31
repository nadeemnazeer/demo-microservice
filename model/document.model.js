const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({ title: 'string', 
                description: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Document = mongoose.model('documents', documentSchema);

module.exports = {
    Document
}