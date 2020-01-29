import React from 'react'
import Odometer from 'react-odometerjs'

class Odometer_counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            odometerValue : 0
        };
    }

    componentDidMount(){
        this.setState({ odometerValue : 0})
    }

    render () {
        return (
            <>
            <div>
                <Odometer_counter
                    format='d'
                    duration={ 500 }
                    value={ odometerValue }
                />
            </div>
            </>
        )
    }
}

export default Odometer_counter;