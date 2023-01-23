import Image from "next/image";
import Link from "next/link";
import fetcher from "../../lib/fetcher";
import Author from "./author";
import Error from "./error";
import Spinner from "./spinner";

export default function Ralated() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || ""}
            className="rounded"
            width={300}
            height={200}
            alt="Post Image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            className="text-orange-600 hover:text-orange-800"
            href={`/posts/${id}`}
          >
            {category || "No Category"}
          </Link>
          <Link
            className="text-gray-800 hover:text-gray-600"
            href={`/posts/${id}`}
          >
            - {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
            href={`/posts/${id}`}
          >
            {title || "No Title"}
          </Link>
        </div>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
