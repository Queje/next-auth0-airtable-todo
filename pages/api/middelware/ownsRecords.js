import auth0 from "../utils/auth0";
import { table } from "../utils/airtableHelper";

const ownsRecords = (handler) => async (req, res) => {
    const { user } = await auth0.getSession(req, res);

    const { id } = req.body

    try {
        const existingRecords = await table.find(id)
        if (!existingRecords || user.sub != existingRecords.fields.userid){
            res.statusCode = 404;
            return res.json({ msg:'records not found'})
        }
        req.record = existingRecords
        return handler(req,res);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        return res.json({msg:'something went wrong!...'})
    }
};

export default ownsRecords;