import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/test-email', 
    method: 'post', 
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'karelnegreirafuentes+test1@gmail.com', 
                from: 'karelnegreira@gmail.com', 
                subject: 'do not reply', 
                text: 'Kindly confirm your account!', 
            }) 
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500); 
        }
    }
}