var AppointmentsList = React.createClass({
	render: function(){
	return (
	<div>	
		{this.props.appointments.map(function(appointment, index){
			return (
				<Appointment key={index} appointment={appointment} />
			)
		})}
	</div>
	)
	}
});