function PostListPage({ items = [] } = {}) {
    return <>
        <div>Posts list</div>
        {items?.map((x) => <div key={x.id}>{x.title}</div>)}
    </>
}

export async function getStaticProps() {
    const items = await Promise.resolve().then(() => [{
        id: 1,
        title: 'Post 1'
    },
    {
        id: 2,
        title: 'Post 2'
    }])
  
    return {
      props: {
        items,
      },
    }
  }
  
export default PostListPage;
