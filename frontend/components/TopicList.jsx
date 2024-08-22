import React from 'react'
import '../styles/TopicList.css'
import topics from '../DS/TopicList'

const TopicList = () => {
  return (
    <div>
        <div className="collapsible-topic-bar">
        {Object.entries(topics).map(([topic, count]) => (   
                    <div key={topic}>
                        <span>{topic}</span>
                        <div>{count}</div>
                    </div>                
            ))}
        </div>
    </div>
  )
}

export default TopicList