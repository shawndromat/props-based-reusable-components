import { connect } from 'react-redux'
import { setOrderType, addLeg } from "./actions";
import App from './App'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOrderType: orderType => {
            dispatch(setOrderType(orderType))
        },
        addLeg: leg => {
            dispatch(addLeg(leg))
        }
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Container