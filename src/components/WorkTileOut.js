import React from 'react'
import PropTypes from 'prop-types';

class WorkTileOut extends React.Component {
  render() {
    return (
<div className='w-50-ns w-100 dib pr5-ns pl0-ns mv3 v-top'>
<a target='blank' href={this.props.link} >
   <img className='hoverable br5'src={this.props.img} alt='UX/UI'/>
   </a>
    <div className='pv2'>
      <h3 className='mt3 mb0'>{this.props.title}</h3>
      <p className='dib f7 secondary-text'>{this.props.info}</p>
      <p style={{lineHeight: '24px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>
    </div>
</div>

    )
  }
}

WorkTileOut.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default WorkTileOut

