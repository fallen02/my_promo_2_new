import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export interface PostData {
  title: string;
  image: {
    url: string;
  };
  url: string;
}

export async function GET() {
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
  )
//   console.log(websites)
  return NextResponse.json(websites)
}
