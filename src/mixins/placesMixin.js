const axios = require('axios');
const querystring = require('querystring');
const apiUrl = 'https://api.foursquare.com/v2/venues/search';
const FOURSQUARE_CLIENT_ID = 'D3VCFXSNCHSS1ALWEAYDXPNUZQJ2LMCJ5AHQE4RXJM4KCIWA';
const FOURSQUARE_CLIENT_SECRET = 'FRCQJMZLP2GFGDZAOGBWMQJNTYXCHDZNMOT3L04ML5XZ3GLH';
const FOURSQUARE_VERSION='20200801';
export const placesMixin = {
  methods: {
    getPlaces(page = 1) {
      const params = {
        page,
        client_id: FOURSQUARE_CLIENT_ID,
        client_secret: FOURSQUARE_CLIENT_SECRET,
        limit: 21
      }
      const queryString = querystring.stringify(params);
      return axios.get(`${apiUrl}?${queryString}`);
    },
    searchPlace(data) {
      let params = Object.assign({}, data);
      params['client_id'] = FOURSQUARE_CLIENT_ID;
      params['client_secret'] = FOURSQUARE_CLIENT_SECRET;
      params['v'] = FOURSQUARE_VERSION;
      params['near'] = data.near;
      params['limit'] = 21;
      Object.keys(params).forEach(key => {
        if (!params[key]) {
          delete params[key];
        }
      })
      const queryString = querystring.stringify(params);
      return axios.get(`${apiUrl}?${queryString}`);
    }
  }
}

