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

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'posts'} element={<Blog/>}/>
                    <Route path={'posts/:id'} element={<SinglePost />}/>
                    <Route path={'posts/:id/edit'} element={<EditPost />}/>
                    <Route path={'posts/new'} element={<NewPost />}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'think'} element={<div>think page</div>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
