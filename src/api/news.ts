import axios from "axios";
import _ from "lodash";
import { getRequestHeaders } from "../functions/common";

const NEWS_FEED_KEY = "183daca270264bad86fc5b72972fb82a";

export const getNewsFeed = (searchQuery = "") => {
  const headers = getRequestHeaders();

  return axios.get(
    `https://newsapi.org/v2/everything?q=${
      !_.isEmpty(searchQuery) ? searchQuery : "world"
    }&apiKey=${NEWS_FEED_KEY}`,
    {
      headers,
    }
  );
};
