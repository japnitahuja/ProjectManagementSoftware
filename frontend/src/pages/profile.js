import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { signOut } from '../redux/user/user.actions'
import { selectCurrentUserFirstName } from '../redux/user/user.selectors'

 class ProfilePage extends Component {

    signOut = () => {
        const {history, signOut} = this.props
        signOut()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        history.push('/login')
    }
    
    render() {
        const {name} = this.props
        return (
            <div>
                <h1>hi {name}!</h1>
                <button onClick={this.signOut}>Sign out</button>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    name: selectCurrentUserFirstName
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
