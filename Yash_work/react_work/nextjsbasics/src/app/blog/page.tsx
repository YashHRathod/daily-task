import getBlog from "../services/userServices"
type PageProps = {
  params: {
    id: string;
  };
};

export default async function BlogPage({ params }: PageProps) {
  const blog = await getBlog(params.id);

  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </article>
  );
}
