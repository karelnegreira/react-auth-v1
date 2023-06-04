import { v4 as uuid } from 'uuid';
import { sendEmail } from '../util/sendEmail';
import { getDbConnection } from '../db';

export const forgotPasswordRoute = {
    path: '/api/forgot-password/:email', 
    method: 'put', 
    handler: async (req, res) => {
        const { email } = req.params;

        const db = getDbConnection('react-auth-db');
        const passwordResetCode = uuid();
        
        const { result } = await db.collection('users').updateOne({email}, {$set: { passwordResetCode }});

        if (result.nModified > 0) {
            try {
                await sendEmail({
                    to: email, 
                    from: 'karelnegreira@gmail.com', 
                    subject: 'password - reset. Do not reply', 
                    text: `To reset the password, click this link: 
                    http://localhost:3000/reset-password/${passwordResetCode}`
                });
            } catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        }
        
        res.sendStatus(200);
    }
}