import { Feature } from "./feature";
import { EventPrague } from "./events";

export const gettingData = async () => {
  try {
    const response = await fetch(
      "https://test-api.codingbootcamp.cz/api/02605eae/events"
    );

    const responseData = await response.json();

    console.log(responseData);

    const featured = responseData[0];

    const event = new Feature(
      featured.id,
      featured.name,
      featured.date,
      featured.description,
      featured.image_url
    );

    document.querySelector(".featured").appendChild(event.element);

    responseData.forEach((element) => {
      const eventSmall = new EventPrague(
        element.id,
        element.name,
        element.date,
        element.description,
        element.image_url
      );
      document.querySelector(".other-events").appendChild(eventSmall.element);
    });
  } catch (e) {
    console.log(`En error occured: ${e}`);
  } finally {
  }
};
