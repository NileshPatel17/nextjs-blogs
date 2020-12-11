import matter from "gray-matter";
// import ReactMarkdown from "react-markdown";

const Blog = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const { slug } = params;
    console.log("slug", slug);
    // output: first post (this is correct)
    // const content = await import(`../md-data/${slug}.md`);
    // const data = matter(content.default);
    // console.log("In getStaticProps:", data);
    // output: In getStaticProps: first post (this is correct too)
    return {
      props: {
        title: "nilesh"
      }
    };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
export const getStaticPaths = async () => {
  const postSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let postSlug = key.replace(/^.*[\\/]/, "");
      return postSlug;
    });
    return data;
  })(require.context("../md-data/", true, /\.md$/));
  console.log(postSlugs);
  const paths = postSlugs.map((postSlug) => `/blog/${postSlug}`);
  return {
    paths,
    fallback: false
  };
};
export default Blog;
