import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h3>Khabar pal pal ki</h3>

          <div className="row">
            <div className="col-md-4">
              <NewsItem title="K2CR breaks record" description="K2CR is a group of 3" imgUrl="/public/images/damon_hypersport_electric_motorcycle_100730759.jpg"></NewsItem>
            </div>
          
          </div>


        </div>
      </>
    )
  }
}
