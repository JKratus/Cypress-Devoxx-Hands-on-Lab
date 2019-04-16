import Banner from '../../../../../../src/components/Home/Banner'
import React from 'react'
import { mount } from 'cypress-react-unit-test'

describe('Banner component', function() {
  it('should display banner given user is not authenticated', function() {
    // TODO use mount function to make a banner instantiation
    // TODO check that the banner exist
    // TODO check that the subtitle is visible
  })

  it('should not display banner given user is authenticated', function() {
    // TODO use mount function to make a banner instantiation with token
    // TODO check that the banner not exist
    // TODO check that the subtitle is not visible
  })
})
