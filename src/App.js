import {useState} from 'react';
import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import AboutLink from './components/AboutLink';
import {Feedbackprovider} from './components/context/FeedbackContext'


function App(){
    const [toggle, settoggle] = useState(false);

    // function deleteFeedBack(id){
    //   return setFeedBack(feedBack.filter(item => item.id !== id))
    // }
    function clicked(){
      return settoggle((toggle) => {
        return !toggle;
      })
    }

    // function addFeedBack(newFeedback) {
    //   newFeedback.id = uuidv4();
    //   setFeedBack([newFeedback, ...feedBack])
    //   console.log(newFeedback);
    // }

    return (
        <Feedbackprovider>
          <Router>
            <Header></Header>
            <button style={{marginLeft: '20px'}} className="btn btn-secondary" onClick={clicked}>{toggle ? <MdOutlineLightMode size={25}/> : <MdDarkMode size={25}/>}</button>
            <div className="container">
              <Routes>
              <Route path='/' element={<>
                <FeedBackForm reverse={toggle}/>
                <FeedBackStats />
                <FeedbackList  reverse={toggle}/> </>}>
                {/* <FeedBackForm reverse={toggle} handleNew={addFeedBack}/>
                <FeedBackStats feedBack={feedBack} />
                <FeedbackList feedBack = {feedBack} reverse={toggle} deleteThis={deleteFeedBack}/> */}
              </Route>
                <Route path='/about' element={<AboutPage reverse={toggle} />}/>
              </Routes>
              <AboutLink />
            </div>
          </Router>
        </Feedbackprovider>
    )
}

// function App(){
//     const loading = true;
//     const title = 'Blog Posts'
//     const subTitle = 'Posts on something'
//     const comments = [
//         {
//             date: "22/02/22",
//             desc: "This is ok"
//         },
//         {
//             date: "11/01/22",
//             desc: "Wow, this is all I need"
//         },
//         {
//             date: "21/01/22",
//             desc: "I dont want this"
//         }
//     ]
//     if(loading) return <h1>Loading/////</h1>
//     return (
//         <>
//         <h1>{title}</h1>
//         <p>{subTitle}</p>
//         <ul className="lists">
//             {comments.map((item, id) => <li key={id}>{item.desc} on {item.date}</li>)}
//         </ul>
//         </>
//     )
// }

export default App;