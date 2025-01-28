import React from 'react'
import { useDashboardStore } from '../../../store/useStore';
import { Pic } from './Styles';
function Photo() {
    const { UserPhoto } = useDashboardStore();

  return (
    <Pic src={UserPhoto}></Pic>
  )
}

export default Photo;