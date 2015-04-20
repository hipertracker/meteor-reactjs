var ReactMeteorMixin = {
    _handleMeteorChange: function () {
        if( this.getMeteorState !== undefined ){
            this.setState(this.getMeteorState())
        }
    },

    _cancelComputation: function(){
        if( this._meteorComputation ){
            this._meteorComputation.stop()
            this._meteorComputation = null
        }
    },

    componentWillMount: function(){
        this._meteorComputation = Tracker.autorun(this._handleMeteorChange)
    },

    componentWillReceiveProps: function( nextProps ){
        var oldProps = this.props
        this.props = nextProps
        this._handleMeteorChange()
        this.props = oldProps
    },

    componentWillUnmount: function(){
        this._cancelComputation()
    }
}


if( typeof exports === "object" ){
    ReactMeteor = exports
} else {
    ReactMeteor = {}
}

ReactMeteor.Mixin = ReactMeteorMixin