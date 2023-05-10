import { destroyItem, getItem, storeItem } from "./api/storage.service";
import axios from "axios";

export const truncateText = (strn, len) => {
  if (strn.length > len) {
    strn = strn.substring(0, len) + "...";
    return strn;
  } else {
    return strn;
  }
};

export const getUrlLastSegement = () => {
  return window.location.pathname.split("/").pop();
};

let options;
export const setBaseApi = (v) => (options = { apiBaseUrl: v });
export const getConfig = () => options;

export const getUserSession = () => {
  try {
    let user = getItem("u_user_info");
    if (user === "" || user === null) return undefined;
    return JSON.parse(user);
  } catch (error) {
    return undefined;
  }
};

export const cacheUserData = (userInfo, token, expiry) => {
  storeItem("u_user_info", userInfo);
  storeItem("u_token", token);
  storeItem("u_token_expiry", expiry);
};

export const clearUserData = () => {
  destroyItem("u_user_info");
  destroyItem("u_token");
  destroyItem("u_token_expiry");
};

export const getAxios = (baseURL) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 200 && response.data.data == 401) {
        clearUserData();
        window.location.reload();
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        clearUserData();
        window.location.reload();
      }
      if (error.response?.status === 429) {
        return Promise.resolve(error);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export function validator(rules, value, formCollection) {
  for (let i = 0; i < rules.length; i++) {
    const ruleKey = rules[i].rule;
    const message = rules[i].message;
    const data = rules[i].data;

    if (ruleKey === "empty" && (value === null || value === "")) {
      return message;
    }

    if (ruleKey === "min-len" && data && value.length < Number(data)) {
      return message;
    }

    if (
      ruleKey === "compare" &&
      formCollection &&
      value != formCollection[data]?.value
    ) {
      return message;
    }

    if (ruleKey === "max-len" && data && value.length > Number(data)) {
      return message;
    }

    if (
      ruleKey === "msisdn" &&
      !new RegExp("^(" + data + "|0)?(\\d{9})$", "i").test(value)
    ) {
      return message;
    }

    if (ruleKey === "url" && !/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
      return message;
    }
    if (ruleKey === "regex" && !new RegExp(data).test(value)) {
      return message;
    }

    if (
      ruleKey === "email" &&
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value)
    ) {
      return message;
    }

    if (ruleKey === "stringonly" && /\d/.test(value)) {
      return message;
    }

    if (ruleKey === "alphanumeric" && !/^[a-zA-Z0-9_]*$/.test(value)) {
      return message;
    }

    if (ruleKey === "numberonly" && !/\d/.test(value)) {
      return message;
    }

    if (ruleKey === "date" && !/^\d{4}([-])\d{2}\1\d{2}$/.test(value)) {
      return message;
    }
  }
}
