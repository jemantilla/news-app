import _ from "lodash";
import React, { useState } from "react";

import "./NANewsFeed.scss";
import * as api from "../../api";
import { NAToaster } from "../NAToaster/NAToaster";
import { NACOLORS } from "../../config";
import { useEffectOnlyOnce } from "../../functions/common";
import { News } from "../../models";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSearchbar,
} from "@ionic/react";

export const NANewsFeed = () => {
  const [news, setNews] = useState(null as null | News[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  useEffectOnlyOnce(() => {
    getAllNews();
  });

  const getAllNews = async (query = "") => {
    if (_.isEmpty(query)) {
      setNews(null);
    }
    try {
      const result = await api.getNewsFeed(query);
      setNews(
        _.filter(
          result.data.articles,
          (newsItem: News) =>
            !_.isEmpty(newsItem.urlToImage) &&
            !_.isNull(newsItem.urlToImage) &&
            !_.isEmpty(newsItem.author)
        )
      );
      console.log("got result", result.data.articles);
    } catch (errorUnknown) {
      const error = errorUnknown as any;
      setError(error);
    }
  };

  return (
    <div className="na-news-feed-container">
      {!_.isNull(news) ? (
        news.map((newsItem, index) => {
          return (
            <IonCard
              key={`news-item-${index}`}
              className="na-news-feed-card ion-no-margin ion-margin-bottom"
            >
              <img alt={newsItem.title} src={newsItem.urlToImage} />{" "}
              <IonCardHeader className="na-news-feed-card-header">
                <IonCardTitle className="na-news-feed-card-title na-h3 bold">
                  {newsItem.title}
                </IonCardTitle>
                <IonCardSubtitle className="na-news-feed-card-subtitle na-h5 ion-text-lowercase">
                  by{" "}
                  <b className="ion-text-capitalize">{`${newsItem.author} | ${newsItem.source.name}`}</b>
                </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          );
        })
      ) : (
        <></>
      )}
      <div className="na-news-feed-footer">
        <IonSearchbar
          onIonCancel={() => {
            getAllNews();
          }}
          value={searchQuery}
          debounce={250}
          onIonChange={(event: CustomEvent) => {
            const value = event.detail.value || "";
            setSearchQuery(value);
            if (!_.isEmpty(value)) {
              console.log("WILL SERACH! ", value);
              getAllNews(value);
            }
          }}
          placeholder="Search for a country"
        />
      </div>
      <NAToaster
        isOpen={!_.isEmpty(error)}
        message={error}
        duration={3000}
        onDidDismiss={() => {
          setError("");
        }}
        color={NACOLORS.danger}
      />
    </div>
  );
};
