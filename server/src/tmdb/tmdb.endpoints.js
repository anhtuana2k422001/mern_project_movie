import tmdbConfig from "./tmdb.config.js";

// The Movie Database (TMDB) - một dịch vụ cung cấp thông tin về phim ảnh.
const tmdbEndpoints = {
    // Lấy ra URL danh sách media 
    // props là mediaType, mediaCategory, và page ==> Component ReactJS 
    MediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}/${mediaId}`
    ),
    mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page }) => tmdbConfig.getUrl(
        `search/${mediaType}`, {query, page}
    ),
    personDetail: ({ personID }) => tmdbConfig.getUrl(
        `person/${personID}`
    ),
    personMedias: ({ personID }) => tmdbConfig.getUrl(
        `person/${personID}/combined_credits`
    ),
};

export default tmdbEndpoints;