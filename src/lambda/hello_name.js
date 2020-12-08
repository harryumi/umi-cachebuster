const axios = require("axios");

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

  async function makePostRequest() {

    let apiUrl = JSON.stringify(baseUrl + zoneID + "/purge_cache");


    let postdata = JSON.stringify({"purge_everything":true});

    let config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + 'HHC_HSZZXogvmnzo0dm5D3-pYJzZBfUUmsmiZtlw'
      },
      data : postdata,
      }
    let res = await axios.post(apiUrl, config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return {
        statusCode: 200,
        body: `Success, ${site} was cleared. ${response.data}`
      };
    })
    .catch(function (error) {
      return {
        statusCode: 400,
        body: `Error, ${site} was not cleared. ${response.data}`
      };
    });
    
};

makePostRequest();

};
