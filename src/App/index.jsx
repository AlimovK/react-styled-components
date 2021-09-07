import React from 'react'
import { Wrapper, Main, Title, Button } from './style'

 const Index = () => {
  return (
    <Main>
      <Title status={'error'} size={'desktop'}>Pdp academy</Title>
      <Title status={'warning'} size={'tablet'}>Pdp academy</Title>
      <Title status={'success'} size={'mobile'}>Pdp academy</Title>
    <Wrapper light={true}/>
    <Wrapper light={false}/>
    <Button>Submit</Button>
    </Main>
  )
}
export default Index

