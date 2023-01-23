import _ from "lodash";
import axios from "axios";
import { CapacitorHttp } from "@capacitor/core";
import { getRequestHeaders, isMobile } from "../functions/common";

const NEWS_FEED_KEY = "183daca270264bad86fc5b72972fb82a";

export const getNewsFeed = (searchQuery = "") => {
  const headers = getRequestHeaders();
  const url = `https://newsapi.org/v2/everything?q=${
    !_.isEmpty(searchQuery) ? searchQuery : "world"
  }&apiKey=${NEWS_FEED_KEY}`;

  return isMobile()
    ? CapacitorHttp.get({ url, headers })
    : axios.get(url, {
        headers,
      });
};
