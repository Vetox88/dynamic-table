import React from 'react'
import Pagination from './PaginationWrapper'

describe('<Pagination />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Pagination />)
  })
})