import { useQuery, useQueryClient } from 'react-query'
import { getPosts } from '../api/postApi'
import Post from '../components/Post'

const Feeds = () => {
  const queryClient = useQueryClient()
  const { isLoading, isError, error, data: posts } = useQuery('posts', getPosts)

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>{error.message}</p>
  } else {
    content = (
      <div className='space-y-4'>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    )
  }
  return <div className='w-full pt-10'>{content}</div>
}

export default Feeds
