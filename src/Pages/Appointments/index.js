import {DatePicker, TimePicker, Select, Button, message} from 'antd'
import moment from 'moment'
// import { useEffect } from 'react'
import { getOrders } from '../../API'
import { useState, useEffect } from 'react'

const { Option } = Select

const hairStyles = [
  { label:'Haircut', value:'haircut' },
  { label:'Coloring', value:'coloring' },
  { label:'Highlights', value:'highlights' },
  { label:'Perm', value:'perm' }
]

const Appointments = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [hairStyle, setHairStyle] = useState('')
  const [appointmentNote, setAppointmentNote] = useState('')
   
    const handleDateChange = (value) => { 
      setDate(value)
     }

    const handleTimeChange = (value) => { 
      setTime(value)
     }

    const handleHairStyleChange = (value) => { 
      setHairStyle(value)
     }

    const handleBookAppointment = () => { 
      if(!date || !time || !hairStyle){ 
        message.error('Please fill in all fields')
        return
       }

       const formattedDate = moment(date).format('YYYY-MM-DD');
       const formattedTime = moment(time).format('HH:mm')

       message.success(`Appointment booked on ${formattedDate} at ${formattedTime} for ${hairStyle}`)
       setAppointmentNote(`You have successfully booked an appointment for ${formattedDate} at ${formattedTime} for ${hairStyle}`);
     }
    
     

    return ( 
        <div>
            <h1>Book an Appointment</h1>
            <DatePicker
            onChange={handleDateChange}/>
            <TimePicker
            onChange={handleTimeChange}/>
            <Select placeholder='Select a hair style'
            onChange={handleHairStyleChange}>
              {hairStyles.map(style => (
                <Option key={style.value}
                value={style.value}>
                  {style.label}
                </Option>
              ))}
            </Select>

            <Button type='primary'
            onClick={handleBookAppointment}>
              Book Appointment
            </Button>
            <br/><br/>
            <p>{appointmentNote}</p>
        </div>
     );
}
 
export default Appointments;