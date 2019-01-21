var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (

            <
            div className = {
                'contactItem'
            } >

            <
            div className = {
                'col'
            } >
            <
            img className = {
                'contactImage'
            }
            src = {
                'http://chittagongit.com//images/icon-message/icon-message-1.jpg'
            }
            /> <
            /div>   <
            p className = {
                'contactName'
            } > Imię: {
                this.props.item.firstName
            } < /p> <
            p className = {
                'contactLast'
            } > Nazwisko: {
                this.props.item.lastName
            } < /p> <
            a className = {
                'contactEmail'
            }
            href = {
                'mailto:' + this.props.item.email
            } > Imię: {
                this.props.item.email
            } < /a> <
            /div>


        )
    },
});