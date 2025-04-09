import { sanityClient } from "./sanityClient";

export interface PostData {
    title: string;
    image: {
      url: string;
    };
    url: string;
  }
export const getWebsites = async () => {
  

  const POSTS_QUERY = `*[_type == "website"]{
          title,
          image {"url": asset->url},
          url
          }`;

  const options = { next: { revalidate: 30 } };
  const websites: PostData[] = await sanityClient.fetch(
    POSTS_QUERY,
    {},
    options
  );
  return websites;
};
