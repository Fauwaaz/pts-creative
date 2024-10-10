// "use server";

// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export const sendEmail = async (formData: FormData) => {
//     const name = formData.get('senderName')
//     const email = formData.get('senderEmail')
//     const number = formData.get('senderNumber')
//     const industry = formData.get('senderIndustry')
//     const message = formData.get('senderMessage')

//     try {
//         await resend.emails.send({
//             from: 'onboarding@resend.dev', 
//             to: 'fauwaaz.shaikh@ptssystems.co.in',
//             subject: 'Enquiry from contact form',
//             replyTo: email as string,
//             text: message as string
//         })
//     } catch (error: unknown) {
//         console.log(error)
//     }
// }   