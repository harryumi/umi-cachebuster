const axios = require("axios");

exports.handler = async (event, context) => {

  const baseUrl = "https://api.cloudflare.com/client/v4/zones/"

  const site = event.queryStringParameters.name || "NA";
  const zoneID = "";

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

  async function makePostRequest() {

    data = {
      "purge_everything":true
      }

    let apiUrl = baseUrl + zoneID + "/purge_cache";
    console.log(apiUrl);

    let res = await axios.post(apiUrl, data);

    console.log(res.data);
}

makePostRequest();
  return {
    statusCode: 200,
    body: `Success, ${site} was cleared.`
  };
};
