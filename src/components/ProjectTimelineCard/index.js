// Write your code here
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'

class ProjectTimelineCard extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)
    return (
      <div>
        <h1>Govinda</h1>
      </div>
    )
  }
}

export default ProjectTimelineCard
