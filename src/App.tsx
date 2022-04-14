import logo from './assets/logo.svg'
import Button from '~/components/Button'

const App: React.FC = () => {
  return (
    <>
      <img style={{ width: '256px' }} src={logo} alt="" />
      <Button>Button</Button>
    </>
  )
}

export default App
