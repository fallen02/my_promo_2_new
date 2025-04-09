"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const revalidate = 30;
export interface PostData {
  title: string;
  image: {
    url: string;
  };
  url: string;
}
export function Website() {
  const [posts, setPostes] = useState<PostData[] | null>(null);

  const getData = async () => {
    const data = await fetch("/api/getWebsite", {
      method: "GET",
    }).then((res) => res.json());
    setPostes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex flex-col gap-10">
      <p className="text-base bg-orange-600/20 w-fit px-3 py-1 rounded-full">Websites</p>
      {posts ? (
        <PhotoProvider>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="flex flex-col gap-5 justify-between items-center">
                
                <PhotoView src={post.image.url}>
                  <Image
                    src={post.image.url}
                    width={800}
                    height={800}
                    alt={post.title}
                  />
                </PhotoView>
                <p className="bg-accent/50 px-2 py-1 text-sm rounded-full">{post.title}</p>
              </div>
            ))}
          </div>
        </PhotoProvider>
      ) : (
        <div className="flex justify-center items-center">
            <p>Please Wait...</p>
        </div>
      )}
    </div>
  );
}
