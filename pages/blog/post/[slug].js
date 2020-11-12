import { useRouter } from 'next/router'
import BlogPost from '../../../components/blog/BlogPost.jsx';
import APIHelper from '../../../helpers/APIHelpers';

const Post = (props) => {
  const router = useRouter()
  const { slug } = router.query;

  if (router.isFallback) {
    return <div>Loading....</div>
  }

  return (
    <BlogPost {...props} />
  )
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const blogPosts = await APIHelper.get('/blogs');
  // testing if generating static paths will us a fallback unavailable static pages.
  const posts = blogPosts.data.data.posts.splice(0, 2);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const blogPost = await APIHelper.get(`/blogs/${params.slug}`);

  // Pass post data to the page via props
  return { props: {
    post: blogPost?.data?.data?.post,
    recentPosts: blogPost.data.data.recentPosts,
  },
    revalidate: 1,
  }
}

export default Post;
