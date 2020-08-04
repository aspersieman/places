const axios = require('axios');
const querystring = require('querystring');
const apiUrl = 'https://pixabay.com/api';
const apikey = '17773335-4b0f88009b5f116ec95997110';
//const FOURSQUARE_CLIENT_ID = 'D3VCFXSNCHSS1ALWEAYDXPNUZQJ2LMCJ5AHQE4RXJM4KCIWA';
//const FOURSQUARE_CLIENT_SECRET = 'FRCQJMZLP2GFGDZAOGBWMQJNTYXCHDZNMOT3L04ML5XZ3GLH';
export const photosMixin = {
    methods: {
      getPhotos(page = 1) {
            const params = {
                page,
                key: apikey,
                per_page: 21
            }
            const queryString = querystring.stringify(params);
            return axios.get(`${apiUrl}/?${queryString}`);
        },
      searchPhoto(data) {
            let params = Object.assign({}, data);
            params['key'] = apikey;
            params['per_page'] = 21;
            Object.keys(params).forEach(key => {
                if (!params[key]) {
                    delete params[key];
                }
            })
            const queryString = querystring.stringify(params);
            return axios.get(`${apiUrl}/?${queryString}`);
        },
      searchVideo(data) {
            let params = Object.assign({}, data);
            params['key'] = apikey;
            params['per_page'] = 21;
            Object.keys(params).forEach(key => {
                if (!params[key]) {
                    delete params[key];
                }
            })
            const queryString = querystring.stringify(params);
            return axios.get(`${apiUrl}/videos/?${queryString}`);
        }
    }
}
