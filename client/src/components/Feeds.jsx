import { useQuery } from 'react-query'
import { getPosts } from '../api/postApi'
import Post from './Post'
import { queryKeys } from '../constants/queryKeys'

const Feeds = () => {
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery(queryKeys.post, getPosts)

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
  return <div className='w-full'>{content}</div>
}

export default Feeds
