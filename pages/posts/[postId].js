import Image from "next/image";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import ErrorComponent from "../../components/_child/error";
import Ralated from "../../components/_child/ralated";
import Spinner from "../../components/_child/spinner";
import fetcher from "../../lib/fetcher";
import getPost from "../../lib/helper";

export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data}></Article>
    </SWRConfig>
  );
}

function Article({ title, img, subtitle, description, author }) {
  return (
    <section className="container mx-auto md:px-2  ">
      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          {title || "No Title"}
        </h1>

        <p className="text-gray-500 text-xl text-center">
          {subtitle || "No Title"}
        </p>

        <div className="py-10">
          <Image
            src={img || "/"}
            width={900}
            height={600}
            alt="blog image"
          ></Image>
        </div>

        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          {description || "No Description"}
        </div>
      </div>

      <Ralated></Ralated>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);

  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
