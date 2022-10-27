import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <header>
        <h1>React router</h1>
       </header>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/users/*" element={ <Users />} />
          <Route path="*" element={ <Missing /> } />
        </Routes>
    </div>
  );
}

function Home() {
  return (
    <main>
      <h2>This is Home</h2>
    </main>
  )
}

function Users() {
  return (
    <main>
      <h2>This is Users</h2>

      <Routes>
        <Route path=":id" element={ <User /> } />
        <Route path="me" element={ <UserMe /> } />
      </Routes>
    </main>
  )
}

function User() {
  const { id } = useParams();
  return (
    <main>
      <h2>This is User{id}</h2>
    </main>
  )
}

function UserMe() {
  return (
    <main>
      <h2>This is User Me</h2>
    </main>
  )
}

function Missing() {
  return (
    <main>
      <h2>ERROR 404</h2>
    </main>
  )
}

export default App;
