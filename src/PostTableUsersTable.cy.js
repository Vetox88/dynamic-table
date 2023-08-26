import React from 'react'
import UsersTable from './PostTable'

describe('<UsersTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UsersTable />)
  })
})