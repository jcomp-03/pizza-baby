export default async function (context, req) {
    context.res.json({ "publicKey": `${process.env.VITE_EMAILJS_PUBLIC_KEY}`});
};