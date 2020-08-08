import request from "@/utils/request.js";
//首页-获取首页轮播图
export const getHome = (params) => request("/eip/getHome", { params });
//首页-获取校园掠影数据
export const getCampus = (params) => request("/eip/getCampus", { params });
//校园掠影详情
export const getCampusById = (params) =>
  request("/eip/getCampusById", { params });
//艺术空间
export const getArt = (params) => request("/eip/getArt", { params });
//艺术空间详情
export const getArtById = (params) => request("/eip/getArtById", { params });
//幼儿保健
export const getHealth = (params) => request("/eip/getHealth", { params });
//幼儿保健详情
export const getHealthById = (params) =>
  request("/eip/getHealthById", { params });
//家园互动
export const getInteraction = (params) =>
  request("/eip/getInteraction", { params });
//家园互动详情
export const getInteractionById = (params) =>
  request("/eip/getInteractionById", { params });
//新闻动态
export const getNews = (params) => request("/eip/getNews", { params });
//新闻动态详情
export const getNewsById = (params) => request("/eip/getNewsById", { params });
//一周食谱
export const getRecipe = (params) => request("/eip/getRecipe", { params });
//一周食谱详情
export const getRecipeById = (params) =>
  request("/eip/getRecipeById", { params });
//安全科普
export const getSecurity = (params) => request("/eip/getSecurity", { params });
//安全科普详情
export const getSecurityById = (params) =>
  request("/eip/getSecurityById", { params });
//教学教研
export const getTeach = (params) => request("/eip/getTeach", { params });
//教学教研详情
export const getTeachById = (params) =>
  request("/eip/getTeachById", { params });
//教师风采
export const getTeacher = (params) => request("/eip/getTeacher", { params });
//教师风采详情
export const getTeacherById = (params) =>
  request("/eip/getTeacherById", { params });
//每周之星
export const getStar = (params) => request("/eip/getStar", { params });
//每周之星详情
export const getStarById = (params) => request("/eip/getStarById", { params });
//招生说明
export const getRecruit = (params) => request("/eip/getRecruit", { params });
//文章详情
export const getArticleById = (data) =>
  request(`/eip/${data.type}ById`, { params: data.params });
