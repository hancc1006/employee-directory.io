import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import "./card.css";

function Card(props) {
  return (

      <div className="col-3">
        <div className="card text-center" key={props.id}>
          <img 
              className="card-img-top images" 
              alt="Profile" 
              src={props.image} 
            />
          <div className="card-body"> 
            <h5 className="card-title font-bold text-md">{props.firstName} {props.lastName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item col-sm-3">
                  <PersonIcon fontSize="large" className="card__icon"></PersonIcon>  {props.username}
                </li>
                <li className="list-group-item col-sm-3">
                  <EmailIcon fontSize="large" className="card__icon"></EmailIcon>  {props.email}
                </li>
                <li className="list-group-item col-sm-3">
                  <PhoneIcon fontSize="large" className="card__icon"></PhoneIcon>  {props.phone}
                </li>
                <li className="list-group-item col-sm-3">
                  <LanguageIcon fontSize="large" className="card__icon"></LanguageIcon>  {props.country}
                </li>
              </ul>
            </div>
        </div>
      </div>
        
  );
}

export default Card;
