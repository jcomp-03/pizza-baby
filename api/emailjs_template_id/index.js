export default async function (context, req) {
    context.res.json({ "templateId": `${process.env.VITE_EMAILJS_TEMPLATE_ID}`});
};