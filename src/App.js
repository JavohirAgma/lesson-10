import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Option1 from './options/Option1'
import Option2 from './options/Option2'
import Option3 from './options/Option3'
import Option4 from './options/Option4'
import Option5 from './options/Option5'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <h1>Hello world</h1>
                        <Link style={{ display: "block" }} to={"/first"}> <button className='btn btn-success'>first</button> </Link>
                        <Link style={{ display: "block" }} to={"/second"}><button className='btn btn-success mt-2'>second</button></Link>
                        <Link style={{ display: "block" }} to={"/thrid"}><button className='btn btn-success mt-2'>thrid</button></Link>
                        <Link style={{ display: "block" }} to={"/fourst"}><button className='btn btn-success mt-2'>fourst</button></Link>
                        <Link style={{ display: "block" }} to={"/fivest"}><button className='btn btn-success mt-2'>fivest</button></Link>

                    </div>
                    <div className="col-md-8  ">
                        <div className='mt-3 mx-3'>
                            <Switch>
                                <Route path="/first" component={Option1} />
                                <Route path="/second" component={Option2} />
                                <Route path="/thrid" component={Option3} />
                                <Route path="/fourst" component={Option4} />
                                <Route path="/fivest" component={Option5} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
