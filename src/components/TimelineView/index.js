// Write your code here
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)
    return (
      <div className="slick-bg">
        <h2>MY JOURNEY OF</h2>
        <h1>CCBP 4.0</h1>
        <CourseTimelineCard timelineItemsList={timelineItemsList} />
        <ProjectTimelineCard timelineItemsList={timelineItemsList} />
      </div>
    )
  }
}

export default TimelineView
