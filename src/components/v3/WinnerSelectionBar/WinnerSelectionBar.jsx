import React from 'react'
import PT from 'prop-types'
import './WinnerSelectionBar.scss'

class WinnerSelectionBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSelected = this.toggleSelected.bind(this)
    this.toggleSelected2nd = this.toggleSelected2nd.bind(this)
    this.toggleSelected3rd = this.toggleSelected3rd.bind(this)

    this.state = {
      isSelected: false
    }
  }

  componentDidMount() {
    this.setState({
      isSelected: !!this.props.isSelected
    })
  }

  toggleSelected(e) {
    const isChecked = e.target.checked
    this.setState({
      isSelected: isChecked
    })
    this.props.checkActionHandler(1, isChecked, this.props.index)
  }

  toggleSelected2nd(e) {
    const isChecked = e.target.checked
    this.setState({
      isSelected: isChecked
    })
    this.props.checkActionHandler(2, isChecked, this.props.index)
  }

  toggleSelected3rd(e) {
    const isChecked = e.target.checked
    this.setState({
      isSelected: isChecked
    })
    this.props.checkActionHandler(3, isChecked, this.props.index)
  }

  render() {
    const props = this.props

    return (
      <div styleName={'winner-bar '
        + (this.state.isSelected && !props.isReadonly ? 'selected' : '')
        + (props.isCompleted ? ' completed ' : '')
        + (props.inProgress ? 'in-progress' : '')
      }
      >
        <div styleName="add-specification-layer addlink-bar" className="flex space-between middle">
          <figure styleName={'thumb ' + (props.icon ? props.icon : '')} />
          <div className="group-right">
            <span styleName="label">{props.label}</span>
            <a href={props.link} target="_blank" styleName="link">{props.link}</a>
          </div>
          {
            (
              <div styleName="position">
                <label styleName={'checkbox-ctrl'} >
                  <input type="radio" styleName="checkbox" name="pos1" onChange={this.toggleSelected} /> 
                  <span styleName={'checkbox-text pos1 ' + (this.props.postionIndex[0] > -1 ? 'inactive' : '' ) }>1</span>
                </label>
                <label styleName={'checkbox-ctrl'} >
                  <input type="radio" styleName="checkbox" name="pos2" onChange={this.toggleSelected2nd} /> 
                  <span styleName={'checkbox-text pos2 ' + (this.props.postionIndex[1] > -1 ? 'inactive' : '' ) }>2</span>
                </label>
                <label styleName={'checkbox-ctrl'} >
                  <input type="radio" styleName="checkbox" name="pos3" onChange={this.toggleSelected3rd} /> 
                  <span styleName={'checkbox-text pos3 ' + (this.props.postionIndex[2] > -1 ? 'inactive' : '' ) }>3</span>
                </label>
              </div>
            )
          }
          {
            props.isReadonly && this.props.isSelected && (
              <span styleName="item-checked" />
            )
          }

        </div>
      </div>
    )
  }
}

WinnerSelectionBar.propTypes = {
  progressPercent: PT.string,
  labelDayStatus: PT.string,
  labelSpent: PT.string,
  labelStatus: PT.string,
  isCompleted: PT.bool,
  inProgress: PT.bool,
  isSelected: PT.bool,
  isReadonly: PT.bool
}

export default WinnerSelectionBar