import {table, sortingRecords} from './utils/airtableHelper'

export default async function getToDos (req, res) {
    try{
        const records = await table.select({}).firstPage();
        const minifiedRecords = sortingRecords(records)
        res.status(200).json(minifiedRecords);
    }catch(err){
        res.status(500).json({msg:'something went wrong!...'});
    }
};