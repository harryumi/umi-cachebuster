import fetch from "node-fetch";
const { CLOUDFLARE_BEARER_TOKEN } = process.env;


exports.handler = async (event, context) => {


  const site = event.queryStringParameters.name || "NA";

  let zoneID = "";

  switch(site) {
    case "northcote":
      zoneID = "b1cc84bd7497f767f5c9d0de7d8ed4c0";
      break;
    case "umi":
      // code block
      break;
    default:
      // code block
  }

  let postdata = JSON.stringify({"purge_everything":true});

  return fetch('https://api.cloudflare.com/client/v4/zones/' + zoneID + '/purge_cache', { method: 'post',  body: postdata, headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CLOUDFLARE_BEARER_TOKEN }})
  .then(response => response.json())
  .then(data => ({
    statusCode: 200,
    body: JSON.stringify({
      data: data
    })
  }))
  .catch(error => ({ statusCode: 422, body: String(error) }));

};
