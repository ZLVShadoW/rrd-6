import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Blog} from './pages/Blog';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import {Layout} from './Components/Layout';
import {SinglePost} from './pages/SinglePost';
import {NewPost} from './pages/NewPost';
import {EditPost} from './pages/EditPost';
import {RequireAuth} from './hoc/RequireAuth';
import {Login} from './pages/Login';
import {LoginProvider} from './hoc/LoginProvider';

const App = () => {
    return (
        <LoginProvider>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'posts'} element={<Blog/>}/>
                    <Route path={'posts/:id'} element={<SinglePost/>}/>
                    <Route path={'posts/:id/edit'} element={<EditPost/>}/>
                    <Route path={'posts/new'} element={
                        <RequireAuth>
                            <NewPost/>
                        </RequireAuth>}/>
                    {/*<Route path={'about/*'} element={<About/>}/> * - при использовании вложенных внутри кмопоненты */}
                    <Route path={'about'} element={<About/>}>
                        <Route path={'contacts'} element={<div>Contacts info</div>} />
                        <Route path={'address'} element={<div>Address information</div>} />
                    </Route>
                    <Route path={'think'} element={<div>think page</div>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </LoginProvider>
    );
}

export default App;
