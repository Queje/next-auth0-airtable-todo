const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME)

const sortingRecords = (records) => {
    return records.map(record => getMinifiedrecord(record))
}

const getMinifiedrecord = (record) => {
    if(!record.fields.completed) {
        record.fields.completed = false;
    }
    return {
        id: record.id,
        fields: record.fields,
    }
} 

export {table, getMinifiedrecord, sortingRecords};