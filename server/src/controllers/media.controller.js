import responseHandler from "..//handlers/response.handler.js"
import tmdApi from "../tmdb/tmdb.api.js"
import userModel from "../models/user.model.js";
import reviewModel from "../models/review.model.js"
import tmdbApi from "../tmdb/tmdb.api.js";
import tokenMiddlerware from "../middlewares/token.middleware.js"
import favoriteModel from "../models/favorite.model";

const getlist = async(req, res) =>{
    try{
        const{ page} = req.query
        const{ mediaType, mediaCategory} = req.params

        const response = await tmdApi.mediaCredits({mediaType, mediaCategory, page})
        return responseHandler.ok(res, response);
    }catch{
        responseHandler.error(res)
    }
};

const getGenres = async(req,res) =>{
    try {
        const{mediaType } = req.params;
        const response = await tmdApi.mediaGenres({mediaType});
        return responseHandler.ok(res, response);
        
    } catch  {
        responseHandler.error(res)
    }

};
const search = async(req, res)=>{
    try {
        const {mediaType} = req.params;
        const{query, page} = req.query;

        const response= await tmdApi.mediaSearch({
            query,
            page,
            mediaTpye: mediaType ==="people" ?"person": mediaType
        });
        responseHandler.ok(res, response);
    } catch  {
        responseHandler.error(res);
        
    }
};

const getDetail = async(req, res) =>{
    try {
        const{mediaTpye, mediaId} = req.params;
        const params = {mediaTpye,  mediaId}

        const media = await tmdApi.mediaCredits(params);
        media.credits = await tmdApi.mediaCredits(params)


        const videos = await tmdbApi.mediaVideos(params)

        media.videos = videos
        const recommend = await tmdbApi.mediaRecommend(params)

        media.recommend = recommend.results
        media.images = await tmdbApi.mediaImages(params)


        const tokenDecoded = tokenMiddlerware.tokenDecode(req)

        if(tokenDecoded){
            const user = await userModel.findById(tokenDecoded.data)

            if(user){
                const isFavorite = await favoriteModel.findOne({user: user.id,mediaId});
                media.isFavorite = isFavorite !== null;

            }
        }
        media.reviews = await reviewModel.find({mediaId}).populate("user").sort("-createAt");
        responseHandler.ok(res, media)
    } catch  {
        responseHandler.error(res);
    }
};

export default({getlist, getGenres, search, getDetail});