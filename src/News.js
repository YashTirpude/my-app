import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function NewsCard(props) {
    let { title, description, imageUrl, newsUrl, date } = props;
  
    return (
      <div>
        <div className="card " style={{ minHeight: "28rem", maxHeight: "28rem" }}>
          <img
            src={!imageUrl ? "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg" : imageUrl}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "200px", minHeight: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{!title ? 'no title to show' : title}...</h5>
            <div>
              <strong>{new Date(date).toGMTString()}</strong>
              <p className="card-text my-3 ">{!description ? 'No description given related to this news. Click Read more to learn more about this News.' : description}</p>
            </div>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    );
  }




  const updateNews = async () => {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`
    props.setProgress(20)
    setLoading(true)
    props.setProgress(40)
    let data = await fetch(url)
    let parsedData = await data.json()
    props.setProgress(80)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
    document.title = `News Master - ${capitalizeFirstLetter(props.category)}`
  }, [])




  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  };


  return (



    <div className='container'>
      <div className='heading'>
        <h2 className={`text-center text-${props.text} m-4 fs-1`}>Top {capitalizeFirstLetter(props.category)}  Headlines</h2>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >

        <div className='container'>


          <div className="row">
            {articles.map((element) => {

              return <div className="col-md-4 my-4" key={element.url}>
                <NewsCard id={element.id} title={element.title.slice(0, 45)} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>

            })}
          </div>
        </div>

      </InfiniteScroll>

    </div>
  )
}


News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'

}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.number,

}
