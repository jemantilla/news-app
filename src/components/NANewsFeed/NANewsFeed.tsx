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
  IonSkeletonText,
} from "@ionic/react";

export const NANewsFeed = () => {
  const [news, setNews] = useState(null as null | News[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffectOnlyOnce(() => {
    getAllNews();
  });

  const getAllNews = async (query = "") => {
    setNews(null);
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
    } catch (errorUnknown) {
      const error = errorUnknown as any;
      setError(error.message || error);
    }
  };

  return (
    <div className="na-news-feed-container">
      {!_.isNull(news)
        ? news.map((newsItem, index) => {
            return (
              <IonCard
                key={`news-item-${index}`}
                className="na-news-feed-card ion-no-margin ion-margin-bottom"
                onClick={() => {
                  window.open(newsItem.url, "_system");
                }}
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
        : _.times(3).map((index) => (
            <IonCard
              key={`news-item-skeleton-${index}`}
              className="na-news-feed-card ion-no-margin ion-margin-bottom"
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "100%", height: "100px" }}
              />
              <IonCardHeader className="na-news-feed-card-header">
                <IonSkeletonText
                  className="na-news-feed-card-title na-h3 bold"
                  style={{ width: "70%" }}
                />

                <IonSkeletonText
                  className="na-news-feed-card-subtitle na-h5 ion-text-lowercase"
                  style={{ width: "35%" }}
                />
              </IonCardHeader>
            </IonCard>
          ))}
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
            getAllNews(value);
          }}
          placeholder="What's news?"
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
