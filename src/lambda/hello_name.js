import fetch from "node-fetch";
const { CLOUDFLARE_BEARER_TOKEN } = process.env;


exports.handler = async (event, context) => {


  const site = event.queryStringParameters.name || "NA";

  let zoneID = "";

  switch (site) {
    case "northcote":
      zoneID = "b1cc84bd7497f767f5c9d0de7d8ed4c0";
      break;
    case "umi":
      zoneID = "b7a2e1d989c1dc2b266ca3039c1b1684";
      break;
    case "haycock":
      zoneID = "0b8dd7c0ff39fed069fa753cde035e9f";
      break;
    case "umiversity":
      zoneID = "e9d5abb70fabd131b6e2bed6d5d86a2f";
      break;
    case "goodhotelguide":
      zoneID = "77e9455b6bcb92cd2c91d4fe277998e3";
      break;
    case "hma":
      zoneID = "7063c0025728523761b2f6a1eda7d9a7";
      break;
    default:
    // code block
  }

  let postdata = JSON.stringify({ "purge_everything": true });

  return fetch('https://api.cloudflare.com/client/v4/zones/' + zoneID + '/purge_cache', { method: 'post', body: postdata, headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CLOUDFLARE_BEARER_TOKEN } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        data: data
      })
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));

};
