export default async function (context, req) {
    context.res.json({ "mapsApiKey": `${process.env.VITE_GOOGLE_MAPS_API_KEY}` });
};
