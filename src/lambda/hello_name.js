import fetch from "node-fetch";

exports.handler = async (event, context) => {

  const baseUrl = "https://api.cloudflare.com/client/v4/zones/"

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
  let apiUrl = JSON.stringify(baseUrl + zoneID + "/purge_cache");
  
  let postdata = JSON.stringify({"purge_everything":true});

  return fetch(apiUrl, { method: 'post',  body: postdata, headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'HHC_HSZZXogvmnzo0dm5D3-pYJzZBfUUmsmiZtlw'}})
  .then(response => response.json())
  .then(data => ({
    statusCode: 200,
    body: data
  }))
  .catch(error => ({ statusCode: 422, body: String(error) }));

};
